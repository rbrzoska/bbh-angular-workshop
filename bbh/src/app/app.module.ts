import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { RepeatDirective } from './repeat.directive';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test-child/test-child.component';
import { ColumnComponent, CustomColumnDirective } from './column/column.component';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { TableComponent } from './table/table.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';
import { ContactComponent } from './contact/contact.component';
import { TableDataService } from './table-data.service';
import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsService } from './notifications.service';
import { BaseNotificationService, Config, ConfigToken } from './tokens';
import { BbhInterceptorService } from './bbh-interceptor.service';
import { init } from 'protractor/built/launcher';
import { ConfigService } from './config.service';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'table-demo', component: TableDemoComponent},
  {path: '**', redirectTo: '/'}
];

const myConf: Config = {
  apiUrl: 'http://localhost:3000',
  delay: 5000
};
const myConf2: Config = {
  apiUrl: 'http://localhost:5000',
  delay: 1000
};

export function initApp(configService: ConfigService) {
  return () => configService.getAppConfig()
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomColumnDirective,
    ContactComponent,
    TableDemoComponent,
    TestComponent,
    TestChildComponent,
    ColumnComponent,
    TestPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    TableComponent,
    RepeatDirective,
    TablePaginatorComponent,
    VatPipe,
    NotificationsContainerComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {provide: APP_INITIALIZER, useFactory: initApp,
      multi: true, deps: [ConfigService]},
    {provide: HTTP_INTERCEPTORS, useClass: BbhInterceptorService, multi: true},
    {provide: TableDataService, useClass: TableDataService},
    {provide: ConfigToken, useValue: myConf, multi: true},
    {provide: ConfigToken, useValue: myConf2, multi: true},
    NotificationsService,
    {provide: 'token', useExisting: NotificationsService},
    {provide: BaseNotificationService, useExisting: NotificationsService}
    ],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent]
})
export class AppModule { }
