import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LateralMenuComponent } from './modules/authentication/components/lateral-menu/lateral-menu.component';
import { TimeLineComponent } from './modules/authentication/components/time-line/time-line.component';
import { HeaderComponent } from './modules/authentication/components/header/header.component';
import { AssetPortfolioComponent } from './modules/authentication/components/asset-portfolio/asset-portfolio.component';// Importa RouterModule personalizado

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    TimeLineComponent,
    HeaderComponent,
    AssetPortfolioComponent
  ],
  imports: [
    AppRoutingModule, // Agrega RouterModule aqu
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
