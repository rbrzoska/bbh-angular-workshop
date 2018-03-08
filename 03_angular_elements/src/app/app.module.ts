import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomComponent } from './custom.component';

export const customElements = [
    CustomComponent
];
@NgModule({
  declarations: [
      ...customElements
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [...customElements]
})
export class AppModule {
    ngDoBootstrap() { }
}
