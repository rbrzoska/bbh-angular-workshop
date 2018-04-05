import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'bbh-notifications-container',
  template: `
    <ng-template #notificationContainer></ng-template>
    <button 
      (click)="createNotification()"
      class="btn btn-warning">Push Notification</button>
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

  notificationFactory: ComponentFactory<NotificationComponent>
  constructor( private cfr: ComponentFactoryResolver) {
    this.notificationFactory = this.cfr.resolveComponentFactory(NotificationComponent)

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.notificationContainer)
  }

  createNotification(msg: string = 'hello') {
    const componentRef = this.notificationContainer.createComponent(this.notificationFactory)
    setTimeout(() => {
      componentRef.destroy();
    }, 5000)
  }

}
