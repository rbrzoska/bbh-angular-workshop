import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';
import { RepeatDirective } from './repeat.directive';
import { TableDataService } from './table-data.service';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test-child/test-child.component';
import { ColumnComponent, CustomColumnDirective } from './column/column.component';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { TOKEN } from './tokens';
import { SharedModule } from './shared/shared.module';
import { TableModule } from './table/table.module';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule'},
  {path: 'table-demo', component: TableDemoComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    CustomColumnDirective,
    TableDemoComponent,
    TablePaginatorComponent,
    RepeatDirective,
    TestComponent,
    TestChildComponent,
    ColumnComponent,
    TestPipe,
    VatPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
