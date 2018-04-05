import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatPipe } from './vat.pipe';
import { RepeatDirective } from './repeat.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VatPipe, RepeatDirective],
  exports: [VatPipe, RepeatDirective]
})
export class SharedModule { }
