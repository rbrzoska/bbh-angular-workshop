import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../Product';
import 'rxjs/add/operator/share'

@Component({
  selector: 'bbh-table-demo',
  template: `
    <bbh-table [products]="products$ | async"></bbh-table>
    {{products$ | async | json}}
  `,
  styles: []
})
export class TableDemoComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.products$ = this.ps.getProducts()
      .share();
  }

}
