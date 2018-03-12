import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'bbh-table',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let product of products">
        <td>{{product.id}}</td>
        <td>{{product.title}}</td>
        <td>{{product.description}}</td>
        <td>{{product.quantity}}</td>
        <td>{{product.price}}</td>
      </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class TableComponent implements OnInit {

  @Input() products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
