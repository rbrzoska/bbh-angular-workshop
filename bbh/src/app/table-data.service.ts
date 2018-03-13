import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Product } from './Product';

@Injectable()
export class TableDataService {

  constructor(private http: HttpClient) { }

  getData<T>(url: string, page: number = 1): Observable<HttpResponse<T[]>> {
    return this.http
      .get<T[]>('http://localhost:3000' + url, {
        params: new HttpParams()
          .set("_limit", "5")
          .set("_page", page.toString() ),
        observe: 'response'
      })
  }

}
