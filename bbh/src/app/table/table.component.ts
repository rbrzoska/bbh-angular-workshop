import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { Product } from '../Product';
import { ColumnComponent } from '../column/column.component';
import { TableDataSource } from '../table-data-source';
import { Observable } from 'rxjs/Observable';
import { map, share } from 'rxjs/operators';
import { Page } from '../page';

@Component({
  selector: 'bbh-table',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th *ngFor="let column of columns">{{column.title}}</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of (data | async)?.items">
        <td *ngFor="let column of columns">{{item[column.property]}}</td>
      </tr>
      </tbody>
    </table>
    <bbh-table-paginator
      [pages]="(data | async)?.total"
      (onChangePage)="handleChangePage($event)"></bbh-table-paginator>
  `,
  styles: []
})
export class TableComponent implements OnInit {

  data: Observable<Page<any>>;
  @Input() dataSource: TableDataSource<any>;
  @ContentChildren(ColumnComponent) columns: QueryList<ColumnComponent>;
  constructor() { }

  ngOnInit() {
    this.data = this.dataSource.tableData;
    console.log(this.data)
    this.dataSource.refresh();
  }


  handleChangePage(page: number) {
    this.dataSource.refresh(page);
  }

}
