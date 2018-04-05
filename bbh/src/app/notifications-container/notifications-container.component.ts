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
import { NotificationsService } from '../notifications.service';

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

  notificationFactory: ComponentFactory<NotificationComponent>
  constructor( private cfr: ComponentFactoryResolver,
               private notificationService: NotificationsService) {
    this.notificationFactory = this.cfr.resolveComponentFactory(NotificationComponent)
    notificationService.getNotifications().subscribe((msg) => {
      this.createNotification(msg);
    })
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.notificationContainer)
  }

  createNotification(msg: string = 'test') {
    const componentRef = this.notificationContainer.createComponent(this.notificationFactory)
    componentRef.instance.message = msg;
    componentRef.changeDetectorRef.detectChanges();
    setTimeout(() => {
      componentRef.instance.message = ":-)))))))";
    }, 5000);
    setTimeout(() => {
      componentRef.destroy();
    }, 10000);
  }

}
