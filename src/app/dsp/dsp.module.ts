import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DspRoutingModule } from './dsp-routing.module';
import { DspComponent } from './dsp/dsp.component';

@NgModule({
  imports: [
    CommonModule,
    DspRoutingModule
  ],
  declarations: [DspComponent]
})
export class DspModule { }
