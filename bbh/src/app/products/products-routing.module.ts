import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDemoComponent } from './table-demo.component';

const routes: Routes = [{
  path: '', component: TableDemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }