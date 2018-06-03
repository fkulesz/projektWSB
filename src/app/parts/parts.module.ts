import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing.module';
import { PartsInfoComponent } from './parts-info/parts-info.component';
import { GetSupersedingsComponent } from './get-supersedings/get-supersedings.component';
import { GetSupersededComponent } from './get-superseded/get-superseded.component';
import { GlobalPartsLocatorComponent } from './global-parts-locator/global-parts-locator.component';
import { FrequentPartsComponent } from './frequent-parts/frequent-parts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PartsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PartsInfoComponent, GetSupersedingsComponent, GetSupersededComponent, GlobalPartsLocatorComponent, FrequentPartsComponent]
})
export class PartsModule { }
