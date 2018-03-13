import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../Product';
import { map, share } from 'rxjs/operators';
import { TableDataService } from '../table-data.service';
import { TableDataSource } from '../table-data-source';

@Component({
  selector: 'bbh-table-demo',
  template: `
    <bbh-table [dataSource]="productDataSource">
      <bbh-column title="Id" property="id"></bbh-column>
      <bbh-column title="Title" property="title"></bbh-column>
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
}
