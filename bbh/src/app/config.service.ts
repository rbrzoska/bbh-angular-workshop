import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  getAppConfig(): Promise<any> {

    return new Promise<any>((resolve) => {
      if(localStorage.getItem('config')) {
        resolve(JSON.parse(localStorage.getItem('config')))
      } else {
        this.http.get('http://localhost:3000/config').subscribe(
          config =>  {
            localStorage.setItem('config', JSON.stringify(config))
            resolve(config)
          }
        )
      }
    })
  }

}
