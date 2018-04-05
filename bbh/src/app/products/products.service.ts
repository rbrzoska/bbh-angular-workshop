import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(page: number = 1): Observable<HttpResponse<Product[]>> {
    return this.http
      .get<Product[]>('http://localhost:3000/products', {
        params: new HttpParams()
          .set("_limit", "5")
          .set("_page", page.toString() ),
        observe: 'response'
      })
  }
}
