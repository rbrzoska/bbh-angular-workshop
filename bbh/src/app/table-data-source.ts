import { TableDataService } from './table-data.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Page } from './page';
import { map } from 'rxjs/operators';

export class TableDataSource<T> {

  private _tableData$ = new Subject<Page<T>>();

  constructor(private tableDataService: TableDataService,
              private url: string){}

  get tableData(): Observable<Page<T>> {
    return this._tableData$.asObservable();
  }

  refresh(page: number = 1){
    this.tableDataService.getData<T>(this.url, page).pipe(
      map(res => {
        return {
          total: Math.ceil(parseInt(res.headers.get('X-Total-Count')) / 5),
          items: res.body
        }
      })
    ).subscribe( x => this._tableData$.next(x))
  }
}
