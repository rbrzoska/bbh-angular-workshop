import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RepeatDirective } from '../repeat.directive';
import { TablePaginatorComponent } from '../table-paginator/table-paginator.component';
import { TableDataService } from '../table-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, RepeatDirective, TablePaginatorComponent],
  exports: [TableComponent, RepeatDirective],
})
export class TableModule {
  static forRoot() {
    return {
      ngModule: TableModule,
      providers:[TableDataService]
    }
  }
}
