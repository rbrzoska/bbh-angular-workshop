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
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
