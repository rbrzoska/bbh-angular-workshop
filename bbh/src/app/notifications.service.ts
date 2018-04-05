import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationsService {

  private messages$ = new Subject<string>();

  constructor() { }

  getNotifications(): Observable<string> {
    return this.messages$.asObservable();
  }

  pushMessage(msg: string) {
    this.messages$.next(msg);
  }

}
