import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Page } from './page';
import 'rxjs/add/operator/map'

@Injectable()
export class DataTableService {


  constructor(private http: HttpClient) { }

  getPaginatedData<T>(url: string, page: number, httpParams: HttpParams): Observable<Page<T>> {
    return this.http.get<T[]>('http://localhost:3000' + url, {
      params: httpParams,
      observe: 'response'
    }).map(res => {
        return <Page<T>>{
          page: page,
          total: parseInt(res.headers.get('X-Total-Count')),
          data: res.body
        }
      }
    );
  }
}
