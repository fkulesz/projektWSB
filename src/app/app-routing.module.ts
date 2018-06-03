import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  
   {path: 'dsp', loadChildren: 'app/dsp/dsp.module#DspModule'},
   {path: 'parts', loadChildren: 'app/parts/parts.module#PartsModule'},
   {path: 'order', loadChildren: 'app/order/order.module#OrderModule'},
   {path: 'quotation', loadChildren: 'app/quotation/quotation.module#QuotationModule'},
   {path: 'buy-back', loadChildren: 'app/buyback/buyback.module#BuybackModule'},
   {path: 'discrepancy', loadChildren: 'app/discrepancy/discrepancy.module#DiscrepancyModule'},

   {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}