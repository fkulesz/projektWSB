import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DspComponent } from './dsp/dsp.component';

const routes: Routes = [
  {path: 'purchase-proposals', component: DspComponent},
  {path: '', redirectTo: 'purchase-proposals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DspRoutingModule { }
