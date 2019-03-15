import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  private socket;
  private SOCKET_URL = 'http://localhost:3000';
  private blockCommitsObserver;
  private cookiejarActionObserver;
  private voteruploadActionObserver;

  constructor() {
    this.socket = io(this.SOCKET_URL);
    this.blockCommitsObserver = fromEvent(this.socket, 'block-commit');
    this.cookiejarActionObserver = fromEvent(this.socket, 'voting-action');
    this.voteruploadActionObserver = fromEvent(this.socket, 'voter-upload');
   }

  public GetBlockCommitSubscription(): Observable<any> {
    return this.blockCommitsObserver;
  }

  public GetCookiejarActionSubscription(): Observable<any> {
    return this.cookiejarActionObserver;
  }

  public GetVoteruploadActionSubscription(): Observable<any> {
    return this.voteruploadActionObserver;
  }
}
