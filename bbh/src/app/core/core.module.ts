import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';
import { Config, ConfigToken } from './tokens';
import { BbhInterceptorService } from './bbh-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ConfigService,
    {provide: APP_INITIALIZER, useFactory: initApp,
      multi: true, deps: [ConfigService]},
    {provide: HTTP_INTERCEPTORS, useClass: BbhInterceptorService, multi: true},
    {provide: ConfigToken, useValue: myConf, multi: true},
    {provide: ConfigToken, useValue: myConf2, multi: true},
    ]
})
export class CoreModule { }
