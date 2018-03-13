import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';
import { RepeatDirective } from './repeat.directive';
import { TableDataService } from './table-data.service';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test-child/test-child.component';

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
    ContactComponent,
    TableComponent,
    TableDemoComponent,
    TablePaginatorComponent,
    RepeatDirective,
    TestComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
