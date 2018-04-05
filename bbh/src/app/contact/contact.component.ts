import { Component, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { BaseNotificationService, Config, ConfigToken } from '../tokens';
import { BbhInterceptorService } from '../bbh-interceptor.service';

@Component({
  selector: 'bbh-contact',
  template: `
    <p>
      contact works!
    </p>

    <bbh-notifications-container></bbh-notifications-container>
    <button
      (click)="createNotification()"
      class="btn btn-warning">Push Notification</button>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor(private ns: BaseNotificationService,
              @Inject(ConfigToken) private config: Config) {
    config.delay = 1000;
  }

  ngOnInit() {
  }

  createNotification() {
    this.ns.pushMessage('hello')
  }

}
