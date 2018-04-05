import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbhTestsRoutingModule } from './bbh-tests-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestPipe } from './test.pipe';
import { TestWprapperComponent } from './test-wprapper.component';
import { TestComponent } from './test.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BbhTestsRoutingModule,
    SharedModule
  ],
  declarations: [
    TestChildComponent,
    TestComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    TestPipe,
    TestWprapperComponent
  ]
})
export class BbhTestsModule { }
