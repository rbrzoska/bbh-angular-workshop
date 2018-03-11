import { Component } from '@angular/core';
import { Product } from '../product';
import { DataTableService } from '../data-table.service';
import { DataTableSource } from '../data-table-source';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styles: []
})
export class TableDemoComponent {

  dataSource = new DataTableSource<Product>(this.ts, '/products' );

  constructor(private ts: DataTableService) { }

}
