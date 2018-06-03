import { DiscrepancyModule } from './discrepancy/discrepancy.module';
import { PartsInfoService } from './parts/parts-info.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A2sCommModule } from 'a2s-comm';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorsService } from './login/colors.service';
import { BuybackModule } from './buyback/buyback.module';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeComponent,
    ErrorPageComponent,
    
  ],
  imports: [
    BrowserModule,
    A2sCommModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BuybackModule,
    DiscrepancyModule,
    
    
  ],
  providers: [PartsInfoService,     ReactiveFormsModule, ColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
