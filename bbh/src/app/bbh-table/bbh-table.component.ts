import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { DataTableSource } from '../data-table-source';
import { BbhTableColumnComponent } from '../bbh-table-column/bbh-table-column.component';
import { Page } from '../page';

@Component({
  selector: 'app-bbh-table',
  templateUrl: './bbh-table.component.html',
  styles: [`tr:focus {
    background-color: red;
  }`]
})
export class BbhTableComponent implements OnInit {

  @Input() dataSource: DataTableSource<any>;
  @ContentChildren(BbhTableColumnComponent) columns: QueryList<BbhTableColumnComponent>;

  page: Page<any>;
  constructor() { }

  ngOnInit() {
    this.dataSource.tableData.subscribe(d => this.page = d)
    this.dataSource.refresh();
  }

  pageChange(pageNumber: number) {
    this.dataSource.refresh(pageNumber);
  }
}
