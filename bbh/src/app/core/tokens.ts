import { InjectionToken } from '@angular/core';

export interface Config {
  apiUrl: string;
  delay: number;
}
export const ConfigToken = new InjectionToken<Config>('token')

export abstract class BaseNotificationService {
  pushMessage(msg: string) {}
}
