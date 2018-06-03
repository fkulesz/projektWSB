import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationEntryComponent } from './quotation-entry/quotation-entry.component';
import { CurrentQuotationComponent } from './current-quotation/current-quotation.component';
import { GetSupersededComponent } from './get-superseded/get-superseded.component';

@NgModule({
  imports: [
    CommonModule,
    QuotationRoutingModule
  ],
  declarations: [QuotationEntryComponent, CurrentQuotationComponent, GetSupersededComponent]
})
export class QuotationModule { }
