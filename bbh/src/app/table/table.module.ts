import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ColumnComponent, CustomColumnDirective } from './column.component';
import { TablePaginatorComponent } from './table-paginator.component';
import { TableDataService } from './table-data.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TableComponent,
  ColumnComponent, CustomColumnDirective, TablePaginatorComponent],
  exports: [TableComponent,
    ColumnComponent, CustomColumnDirective],
})
export class TableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TableModule,
      providers: [TableDataService]
    }
  }
}
