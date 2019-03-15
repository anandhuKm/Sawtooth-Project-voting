/**
 * Copyright 2018 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */

//works in strict mode
'use strict'

//require the handler module.
//declaring a constant variable.
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')


const {
  InvalidTransaction,
  InternalError
} = require('sawtooth-sdk/processor/exceptions')
const crypto = require('crypto')
const {TextEncoder, TextDecoder} = require('text-encoding/lib/encoding')

const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase()
var encoder = new TextEncoder('utf8')
var decoder = new TextDecoder('utf8')
const CJ_FAMILY = 'voting'
const CJ_NAMESPACE = _hash(CJ_FAMILY).substring(0, 6)


//function to obtain the payload obtained from the client
const _decodeRequest = (payload) =>
  new Promise((resolve, reject) => {
    payload = payload.toString().split(',')
    if (payload.length === 5 && payload[0]==='voter-upload') {
      resolve({
        action: payload[0],
        name : payload[1],
        id : payload[2],
        password : payload[3],
        station : payload[4]
      })
    }
    else if (payload.length === 4 && payload[0]==='candidate-upload') {
      resolve({
        action: payload[0],
        name : payload[1],
        caSign : payload[2],
	      station : payload[3]
      })
    }
    else if (payload.length === 3 && payload[0]==='vote') {
      resolve({
        action: payload[0],
        CandidateIndex: payload[1],
        station:payload[2]
      })
    }
    else if (payload.length === 2 && payload[0]==='setVote') {
      resolve({
        action: payload[0],
        voterId : payload[1]
      })
    }
   
    else {
      let reason = new InvalidTransaction('Invalid payload serialization')
      reject(reason)
    }
})

//function to display the errors
const _toInternalError = (err) => {
  console.log(" in error message block")
  let message = err.message ? err.message : err
  throw new InternalError(message)
}

//function to set the entries in the block using the "SetState" function
const _setEntry = (context, address, stateValue) => {
  let dataBytes = encoder.encode(stateValue)
  let entries = {
    [address]: dataBytes 
  }
  return context.setState(entries)
}

//voter upload logic
const voterUpload = (context, address, values,  userPK) => (possibleAddressValues) => {
  let stateValueRep = possibleAddressValues[address]
  var vcount =0;
  let data = {
    name : values.name,
    id : values.id,
    password : values.password,
    station : values.station,
    voted  : false
  }
  data = JSON.stringify(data);
  const actionText = "Voter "+values.name +" is Uploaded";
  context.addEvent(
    "voting/voting-action",
    [["action", "Voter-upload"],["actionText", actionText], ["user", userPK]],
    Buffer.from("")
  )
  return _setEntry(context, address, data)
}

//candidate upload logic
const candidateUpload = (context, address, values, userPK) => (possibleAddressValues) => {
  let stateValueRep = possibleAddressValues[address]
  let data;
  let parsedData;
  var ccount =0;
  if(stateValueRep == null||stateValueRep == ''){
      data = {
        totalVoted:0,
        candidates:[{name:values.name,sign:values.caSign,count:0}]
      }
      ccount= data.candidates.length;
  }
  else{
    let getData = decoder.decode(stateValueRep)
    parsedData = JSON.parse(getData)
    for(var i = 0; i < parsedData.candidates.length; i++){
       if(values.caSign == parsedData.candidates[i].sign){
        throw new InvalidTransaction('Sign already exist in this Station');
       }
       else{

       }
    }
    let entry = {name:values.name,sign:values.caSign,count:0}
    parsedData['candidates'].push(entry)
    ccount= parsedData.candidates.length;
    data = parsedData
  }
  data = JSON.stringify(data);
  const actionText = "Candidate "+values.name +" is Uploaded with sign "+ values.caSign +" at " +values.station +"." ;
  context.addEvent(
    "voting/voting-action",
    [["action", "Candidate-upload"],["actionText", actionText], ["user", userPK]],
    Buffer.from("Current number of Candidates : "+ccount)
  )
  
  return _setEntry(context, address, data)
}

//voting logic
const vote = (context, address, values,  userPK) => (possibleAddressValues) => {
  let stateValueRep = possibleAddressValues[address]

  if (stateValueRep == null || stateValueRep == ''){
    throw new InvalidTransaction('state error')
  }
  else{
   let data = decoder.decode(stateValueRep)
    data = JSON.parse(data)
    data.totalVoted=data.totalVoted + 1
    data.candidates[values.CandidateIndex].count += 1;
  let updatedData = JSON.stringify(data);
  const actionText = "A voter have Voted";
  context.addEvent(
    "voting/voting-action",
    [["action", "setVote"],["actionText", actionText], ["user", userPK]],
    Buffer.from("")
  )
  return _setEntry(context, address, updatedData)
  }
}

//logic for set voter state
const setVote = (context, address, values, userPK) => (possibleAddressValues) => {
  let stateValueRep = possibleAddressValues[address]

  if (stateValueRep == null || stateValueRep == ''){
    throw new InvalidTransaction('state error')
  }
  else{
   let data = decoder.decode(stateValueRep)
    data = JSON.parse(data)
    data.voted = true
  let updatedData = JSON.stringify(data);
  console.log('the data :',data);
  const actionText = data.name +" have Voted";
  context.addEvent(
    "voting/voting-action",
    [["action", "setVote"],["actionText", actionText], ["user", userPK]],
    Buffer.from("")
  )
  return _setEntry(context, address, updatedData)
  }
}


class VotingHandler extends TransactionHandler{
  constructor(){
    super(CJ_FAMILY,['1.0'],[CJ_NAMESPACE])
  }
  apply(transactionProcessRequest, context){
    return _decodeRequest(transactionProcessRequest.payload)
    .catch(_toInternalError)
    .then((update) => {
    let header = transactionProcessRequest.header
    let userPublicKey = header.signerPublicKey;
    let action = update.action
    let actionFn
    let Address = CJ_NAMESPACE + _hash(userPublicKey).slice(-64)
    if (!action) {
      throw new InvalidTransaction('Action is required')
    }
    //validation of voter-upload
    if(action === 'voter-upload'){
    let name = update.name
    if (name == "" || name == undefined) {
      throw new InvalidTransaction('Value is required')
    }
    if ( update.password == "" || update.password == undefined) {
      throw new InvalidTransaction('password is required')
    }
    if (typeof name !== "string" ||  name.length < 1) {
      throw new InvalidTransaction(`Value must contain only characters ` + `no less than 1`)
    }
    let id = update.id;
    let idNum = parseInt(id);
    console.log("ID :",idNum,'length:',id.length)

    if( id.length != 12){
      throw new InvalidTransaction(`Id must be a numerical value ` + `must contain 12 digits`)
    }
    //calculating the address for function voter upload
    Address = CJ_NAMESPACE +_hash(update.id).substring(0,64) 
     // Select the action to be performed
    actionFn = voterUpload
    
    }
    //validation of candidate upload
    else if(action === 'candidate-upload'){
      let name = update.name;
      if (name == null || name == undefined) {
        throw new InvalidTransaction('Value is required')
      }

      if (typeof name !== "string" ||  name.length < 1) {
        throw new InvalidTransaction(`Value must contain only characters ` + `no less than 1`)
      }

      if (update.caSign == "" || update.caSign == undefined) {
        throw new InvalidTransaction('Sign is required')
      }
  
      //calculating the address for function candidate upload
      Address = CJ_NAMESPACE +_hash(update.station).substring(0,64)
       // Select the action to be performed
      actionFn = candidateUpload

      }
      //validation of vote
      else if(action === 'vote'){
        let CandidateInd = update.CandidateIndex;
        CandidateInd = parseInt(CandidateInd)
        
        
        let station = update.station;
        if(station == "" || station == undefined){
         throw new InvalidTransaction('Station is required')
        }
    
        //calculating the address for candidate state
        Address = CJ_NAMESPACE +_hash(station).substring(0,64)
         // Select the action to be performed
        actionFn = vote
  
        }
        else if(action === 'setVote'){
          let id = update.voterId;
          let idNum = parseInt(id);
          console.log("ID :",idNum,'length:',id.length)

          if( id.length != 12 ){
          throw new InvalidTransaction( `must contain 12 digits`)
          }
      
          //calculating the address for candidate state
          Address = CJ_NAMESPACE +_hash(id).substring(0,64)
          
           // Select the action to be performed
          actionFn = setVote
    
          }
          else{
            throw new InvalidTransaction('Unknown action!!')
          }

    

   
  
  

    // Get the current state, for the key's address
    let getPromise
    if (update.action == 'voter-upload')
      getPromise = context.getState([Address])
    else
      getPromise = context.getState([Address])
    let actionPromise = getPromise.then(
      actionFn(context,Address, update, userPublicKey)
      )
    
    return actionPromise.then(addresses => {
      if (addresses.length === 0) {
        throw new InternalError('State Error!')
      }  
    })

   
   
  })
 }
}

module.exports = VotingHandler
