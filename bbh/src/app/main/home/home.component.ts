import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../store/reducers';
import { Store } from '@ngrx/store'
import { AddProduct, LoadProducts } from '../../store/products.actions';
@Component({
  selector: 'bbh-home',
  template: `
    <p>
      {{9.97 | vat}}
      {{11.16| vat}}
    {{4.95| vat}}
    </p>
    <button (click)="addProduct()">Add Product</button>
    <button (click)="loadProducts()">Load All Products</button>
    <pre>{{products$ | async | json}}</pre>
  `,
  styles: [],
  providers:[]
})
export class HomeComponent implements OnInit {

  products$ = this.store$.select(fromRoot.getProductListState)
  constructor(private store$: Store<fromRoot.State>) {

  }

  ngOnInit() {
  }

  addProduct() {
    this.store$.dispatch(new AddProduct({
      title: 'product1',
      id: 1,
      description: 'product1 desc',
      quantity: 10,
      price: 0.99
    }))
  }

  loadProducts() {
    this.store$.dispatch(new LoadProducts())
  }

}
