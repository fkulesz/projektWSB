import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscrepancyRoutingModule } from './discrepancy-routing.module';
import { DiscrepancyEntryComponent } from './discrepancy-entry/discrepancy-entry.component';

@NgModule({
  imports: [
    CommonModule ,
    DiscrepancyRoutingModule
  ],
  declarations: [DiscrepancyEntryComponent]
})
export class DiscrepancyModule { }
