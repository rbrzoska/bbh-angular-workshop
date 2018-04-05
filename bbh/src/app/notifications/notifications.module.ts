import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNotificationService } from '../core/tokens';
import { NotificationsService } from './notifications.service';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationComponent,
    NotificationsContainerComponent],
  exports: [NotificationsContainerComponent],
  entryComponents: [NotificationComponent]
})
export class NotificationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotificationsModule,
      providers: [
        NotificationsService,
        {provide: 'token', useExisting: NotificationsService},
        {provide: BaseNotificationService, useExisting: NotificationsService}
      ]
    }
  }
}
