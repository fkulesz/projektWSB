import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuybackRoutingModule } from './buyback-routing.module';
import { CurrentBbComponent } from './current-bb/current-bb.component';

@NgModule({
  imports: [
    CommonModule,
    BuybackRoutingModule
  ],
  declarations: [CurrentBbComponent]
})
export class BuybackModule { }
