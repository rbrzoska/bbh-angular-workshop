import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'bbh-notifications-container',
  template: `
    <ng-template #notificationContainer></ng-template>
  `,
  styles: [`:host {
    position: fixed;
    z-index: 1000;
    right: 10px;
    top: 10px;
  }
  `]
})
export class NotificationsContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('notificationContainer', {read: ViewContainerRef})
  notificationContainer: ViewContainerRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.notificationContainer)
  }

}
