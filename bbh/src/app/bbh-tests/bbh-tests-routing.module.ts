import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestWprapperComponent } from './test-wprapper.component';

const routes: Routes = [{
  path: '', component: TestWprapperComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbhTestsRoutingModule { }
