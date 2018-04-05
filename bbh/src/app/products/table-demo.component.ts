import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { TableDataService } from '../table/table-data.service';
import { TableDataSource } from '../table/table-data-source';

@Component({
  selector: 'bbh-table-demo',
  template: `
    <bbh-table [dataSource]="productDataSource">
      <bbh-column title="Id" property="id"></bbh-column>
      <bbh-column title="Title" property="title"></bbh-column>
      <bbh-column title="Price" property="price" type="vat"></bbh-column>
      <bbh-column title="Actions" property="" type="custom">
        <button *customColumn="let item = item" (click)="getId(item.id)">Edit {{item.id}}</button>
      </bbh-column>
    </bbh-table>
    `,
  styles: []
})
export class TableDemoComponent {

  productDataSource: TableDataSource<Product>;
  pages: number;
  constructor(private dataService: TableDataService) {
    this.productDataSource = new TableDataSource<Product>(dataService, '/products');
  }
  getId(id: number) {
    alert(id)
  }
}
