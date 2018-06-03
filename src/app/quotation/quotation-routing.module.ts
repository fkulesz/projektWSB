import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationEntryComponent } from './quotation-entry/quotation-entry.component';
import { CurrentQuotationComponent } from './current-quotation/current-quotation.component';
import { GetSupersededComponent } from './get-superseded/get-superseded.component';

const routes: Routes = [
  {path: 'quotation-entry', component: QuotationEntryComponent},
  {path: '', redirectTo: 'quotation-entry', pathMatch: 'full'},
  {path: 'current-quotation', component: CurrentQuotationComponent},
  {path: 'get-superseded', component: GetSupersededComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
