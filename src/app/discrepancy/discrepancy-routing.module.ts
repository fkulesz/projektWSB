import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscrepancyEntryComponent } from './discrepancy-entry/discrepancy-entry.component';

const routes: Routes = [
  {path: 'discrepancy-entry', component: DiscrepancyEntryComponent},
  {path: '', redirectTo: 'discrepancy-entry', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscrepancyRoutingModule { }
