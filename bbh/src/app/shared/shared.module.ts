import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatPipe } from './vat.pipe';
import { RepeatDirective } from './repeat.directive';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VatPipe,
    RepeatDirective,
    WizardComponent],
  exports: [VatPipe,
    RepeatDirective,
    WizardComponent]
})
export class SharedModule { }
