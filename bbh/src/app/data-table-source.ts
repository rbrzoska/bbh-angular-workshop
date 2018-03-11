import { Subject } from 'rxjs/Subject';
import { DataTableService } from './data-table.service';
import { HttpParams } from '@angular/common/http';
import { Page } from './page';

export class DataTableSource<T> {
  private _tableData$ = new Subject<Page<T>>();

  constructor(
    private tableService: DataTableService,
    private apiUrl: string
  ){}

  get tableData() {
    return this._tableData$.asObservable();
  }

  refresh(page = 1) {
    const httpParams = new HttpParams().set('_page', page.toString()).set('_limit', '5');
    this.tableService
      .getPaginatedData<T>(this.apiUrl, page, httpParams)
      .subscribe(page => this._tableData$.next(page))
  }

}
