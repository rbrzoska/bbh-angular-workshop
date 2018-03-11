import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { BbhTableComponent } from './bbh-table/bbh-table.component';
import { BbhTablePaginationComponent } from './bbh-table-pagination/bbh-table-pagination.component';
import { RepeatDirective } from './repeat.directive';
import { DataTableService } from './data-table.service';
import { BbhCustomColumnDirective, BbhTableColumnComponent } from './bbh-table-column/bbh-table-column.component';
import { VatPipe } from './vat.pipe';
import { TableRowSelectDirective } from './table-row-select.directive';
import { CustomRendererService } from './custom-renderer.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'table-demo', component: TableDemoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent,
    HomeComponent,
    BbhTableComponent,
    BbhTablePaginationComponent,
    RepeatDirective,
    BbhTableColumnComponent,
    BbhCustomColumnDirective,
    VatPipe,
    TableRowSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataTableService, CustomRendererService],
  bootstrap: [AppComponent]
})
export class AppModule { }
