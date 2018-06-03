import { FrequentPartsComponent } from './frequent-parts/frequent-parts.component';
import { GlobalPartsLocatorComponent } from './global-parts-locator/global-parts-locator.component';
import { GetSupersededComponent } from './get-superseded/get-superseded.component';
import { GetSupersedingsComponent } from './get-supersedings/get-supersedings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartsInfoComponent } from './parts-info/parts-info.component';

const routes: Routes = [
  {path: 'parts-info', component: PartsInfoComponent},
  {path: '', redirectTo: 'parts-list', pathMatch: 'full'},
  {path: 'get-supersedings', component: GetSupersedingsComponent},
  {path: 'get-superseded', component: GetSupersededComponent},
  {path: 'global-parts-locator', component: GlobalPartsLocatorComponent},
  {path: 'frequent-parts', component: FrequentPartsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsRoutingModule { }
