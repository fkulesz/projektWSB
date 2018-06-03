import { OrderEntryComponent } from './order-entry/order-entry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';

const routes: Routes = [
  {path: 'order-entry', component: OrderEntryComponent},
  {path: '', redirectTo: 'order-entry', pathMatch: 'full'},
  {path: 'current-order', component: CurrentOrderComponent},
  {path: 'order-status', component: OrderStatusComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
