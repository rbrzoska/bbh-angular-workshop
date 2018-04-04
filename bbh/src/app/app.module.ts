import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { RepeatDirective } from './repeat.directive';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test-child/test-child.component';
import { ColumnComponent, CustomColumnDirective } from './column/column.component';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { TableComponent } from './table/table.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'table-demo', component: TableDemoComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomColumnDirective,
    ContactComponent,
    TableDemoComponent,
    TestComponent,
    TestChildComponent,
    ColumnComponent,
    TestPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    TableComponent, RepeatDirective, TablePaginatorComponent, VatPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
