import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentBbComponent } from './current-bb/current-bb.component';

const routes: Routes = [
  {path: 'current-bb', component: CurrentBbComponent},
  {path: '', redirectTo: 'current-bb', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuybackRoutingModule { }
