import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { TableDemoComponent } from './table-demo.component';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from '../table/table.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NotificationsModule,
    SharedModule,
    TableModule
  ],
  declarations: [TableDemoComponent]
})
export class ProductsModule { }
