import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(page: number): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>('http://localhost:3000/products', {
      params: new HttpParams().set('_page', page.toString()).set('_limit', '5'),
      observe: 'response'
    });
  }


}
