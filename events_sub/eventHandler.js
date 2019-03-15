'use strict'

const _ = require('lodash');

const {
    Message,
    EventList,
    StateChangeList
  } = require('sawtooth-sdk/protobuf')

// Handle event message received by stream
const handleEvent = (msg) => {
    // Check if the message is an event message
    if (isEventMessage(msg)) {
      // Get the list of events
      const events = getEventsFromMessage(msg);
      // Iterate over each event and process
      let blockNum;
      events.forEach(event => {
        if (isBlockCommitEvent(event)) {
          blockNum = sendBlockUpdate(event);
        } 
        else if (isStateDeltaEvent(event)) {
          //deltas.handle(getBlock(events), getChanges(events));
        } else if (isCookieJarAction(event)) {
          sendCookieJarAction(blockNum, event);
        } else if (isVoterUploadAction(event)) {
          sendVoterUploadAction(blockNum, event);
        }
      });    
    } else {
      console.warn('Received message of unknown type:', msg.messageType)
    }
  }

  const isEventMessage = (msg) => {
    return msg.messageType === Message.MessageType.CLIENT_EVENTS;
  }
  
  const getEventsFromMessage = (msg) => {
    return EventList.decode(msg.content).events;
  }
  
  const isBlockCommitEvent = (event) => {
    return event.eventType === 'sawtooth/block-commit';
  }
  
  const isStateDeltaEvent = (event) => {
    return event.eventType === 'sawtooth/state-delta';
  }

  const isCookieJarAction = (event) => {
    return event.eventType === 'voting/voting-action';
  }

  const isVoterUploadAction = (event) => {
    return event.eventType === 'voting/voter-upload';
  }

/*----------------------------------------------------*/
const sendBlockUpdate = event => {
    const blockData = getBlock(event);
    this.socket.emit('block-commit', blockData);
    return blockData.blockNum;
}

   // Parse Block Commit Event
const getBlock = events => {
    const block = _.chain(events)
        //.find(e => e.eventType === 'sawtooth/block-commit')
        .get('attributes')
        .map(a => [a.key, a.value])
        .fromPairs()
        .value()
    return {
        blockNum: parseInt(block.block_num),
        blockId: block.block_id,
        stateRootHash: block.state_root_hash
    }
}
/*
// Parse State Delta Event
const getChanges = event => {
    //const event = events.find(e => e.eventType === 'sawtooth/state-delta')
    if (!event) return []
  
    const changeList = StateChangeList.decode(event.data)
    return changeList.stateChanges
      //.filter(change => change.address.slice(0, 6) === PREFIX)
}
*/

const getCookiejarActionData = (blockNum, event) => {
  return {
    blockNum: blockNum,
    action: _.chain(event).get('attributes').map(a=>[a.key, a.value]).fromPairs().value().action,
    actionText: _.chain(event).get('attributes').map(a=>[a.key, a.value]).fromPairs().value().actionText,
    PK: _.chain(event).get('attributes').map(a=>[a.key, a.value]).fromPairs().value().user,
    message: event.data.toString('utf8')
  }
}

const getVoterUploadActionData = (blockNum, event) => {
  return {
    blockNum: blockNum,
    action: _.chain(event).get('attributes').map(a=>[a.key, a.value]).fromPairs().value().action,
    actionText: _.chain(event).get('attributes').map(a=>[a.key, a.value]).fromPairs().value().actionText,
    PK: _.chain(event).get('attributes').map(a=>[a.key, a.value]).fromPairs().value().user,
    message: event.data.toString('utf8')
  }
}

const sendCookieJarAction = (blockNum, event) => {
  const cookieJarActionData = getCookiejarActionData(blockNum, event);
  this.socket.emit("voting-action", cookieJarActionData);
}
const sendVoterUploadAction = (blockNum, event) => {
  const cookieJarActionData = getVoterUploadActionData(blockNum, event);
  this.socket.emit("voter-upload", cookieJarActionData);
}

this.socket = null;
const setSocket = socketConnection => {
    this.socket = socketConnection;
}
  
module.exports = { handleEvent, setSocket };