import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderEntryComponent } from './order-entry/order-entry.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderEntryComponent, CurrentOrderComponent, OrderStatusComponent]
})
export class OrderModule { }
