import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../Product';
import 'rxjs/add/operator/share'
import 'rxjs/add/operator/map'

@Component({
  selector: 'bbh-table-demo',
  template: `
    <bbh-table [products]="products$ | async"></bbh-table>
    <bbh-table-paginator 
      [pages]="pages" 
      (onChangePage)="handleChangePage($event)"></bbh-table-paginator>
  `,
  styles: []
})
export class TableDemoComponent implements OnInit {

  pages: number;
  products$: Observable<Product[]>;
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.handleChangePage(1)
  }

  handleChangePage(page: number) {
    this.products$ = this.ps.getProducts(page)
      .map(res => {
        this.pages = Math.ceil(parseInt(res.headers.get('X-Total-Count')) / 5);
        return res.body
      })
      .share();
  }

}
