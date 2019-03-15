import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from '../subscriber/subscriptions.service';
import { RestApisService } from '../rest-apis/rest-apis.service';
import { StringDecoder } from 'string_decoder';
import { UploaderService } from '../uploader.service';

@Component({
  selector: 'app-events-sidebar',
  templateUrl: './events-sidebar.component.html',
  styleUrls: ['./events-sidebar.component.scss']
})
export class EventsSidebarComponent implements OnInit {

  private blockInfo = {
    blockId: String,
    blockNum: Number,
    blockRoot: String,
    StateRoot: String,
    action: String,
    actionText: String,
    cookieCount: String
  };

  private blockDetail = {
    batches: Array,
    header: Object,
    signature: String
  };

  private cookiejarAction = {
    action: String,
    cookieCount: String
  };


  private voteruploadAction = {
    action: String,
    cookieCount: String
  };

  private blockInfoChain;
  private cookiejarActionHistory;
  private voteruploadActionHistory;
  public showDetails = false;
  public blockContents;

  constructor(private subscriptions: SubscriptionsService,
    private restapi: RestApisService,
    private loginService: UploaderService) {
      this.blockInfoChain = [this.blockInfo];
      this.cookiejarActionHistory = [this.cookiejarAction];
      this.voteruploadActionHistory = [this.voteruploadAction];
      this.subscriptions.GetBlockCommitSubscription()
      .subscribe((data) => this.processBlockCommitEvent(data));
    this.subscriptions.GetCookiejarActionSubscription()
      .subscribe((data) => this.processCookiejarActionEvent(data));
      this.subscriptions.GetVoteruploadActionSubscription()
      .subscribe((data) => this.processVoteruploadActionEvent(data));
  }

  ngOnInit() {
    
  }

  public openFullScreen(event, blockId) {
    this.restapi.Block(undefined, undefined, blockId)
    .then(data => data.json())
    .then(blockData => {
      console.log('block data', blockData);
      this.blockContents = Object.assign({}, this.blockDetail);
      this.blockContents.batches = blockData.data.batches;
      console.log('batches', this.blockContents);
      this.showDetails = true;
    });
  }

  public processBlockCommitEvent(this, data) {
    console.log('observed event', data);
    if (data && data.blockId) {
      const newBlockInfo = Object.assign({}, this.blockInfo);
      newBlockInfo.blockId = data.blockId;
      newBlockInfo.blockNum = data.blockNum;
      newBlockInfo.action = null;
      newBlockInfo.cookieCount = null;
      this.blockInfoChain[data.blockNum] = newBlockInfo;
    }
  }

  public processCookiejarActionEvent(this, data) {
    console.log('observed event', data);
    console.log("this.blockInfoChain[data.blockNum] before", this.blockInfoChain[data.blockNum]);
    if (data && data.action && (data.PK === this.loginService.publicKey)) {
      const newBlockInfo = Object.assign(this.blockInfoChain[data.blockNum]);
      newBlockInfo.action = data.action;
      newBlockInfo.actionText = data.actionText;
      newBlockInfo.cookieCount = data.message;
    }
  }

  public processVoteruploadActionEvent(this, data) {
    console.log('observed event', data);
    console.log("this.blockInfoChain[data.blockNum] before", this.blockInfoChain[data.blockNum]);
    if (data && data.action && (data.PK === this.loginService.publicKey)) {
      const newBlockInfo = Object.assign(this.blockInfoChain[data.blockNum]);
      newBlockInfo.action = data.action;
      newBlockInfo.actionText = data.actionText;
      newBlockInfo.cookieCount = data.message;
      console.log("processing voter-upload event");
    }
  }
}
