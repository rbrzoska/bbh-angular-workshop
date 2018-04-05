import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { Product } from '../products/Product';
import { ColumnComponent } from './column.component';
import { TableDataSource } from './table-data-source';
import { Observable } from 'rxjs/Observable';
import { map, share } from 'rxjs/operators';
import { Page } from './page';

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
        <td *ngFor="let column of columns">
          <ng-container [ngSwitch]="column.type">
            <ng-container *ngSwitchCase="'vat'">{{item[column.property] | vat}}</ng-container>
            <ng-container *ngSwitchCase="'custom'">
              <ng-container *ngTemplateOutlet="column.customTemplate; context: {item: item}"></ng-container>
            </ng-container>
            <ng-container *ngSwitchDefault>{{item[column.property]}}</ng-container>
        </ng-container>
        
        
        </td>
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
    this.dataSource.refresh();
  }


  handleChangePage(page: number) {
    this.dataSource.refresh(page);
  }

}
