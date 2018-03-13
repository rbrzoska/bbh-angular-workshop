import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from '../table/table.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    TableModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
