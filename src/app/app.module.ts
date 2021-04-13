import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Matertial chidorin
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { ColorPickerCardComponent } from './components/color-picker-card/color-picker-card.component'
import {MatMenuModule} from '@angular/material/menu';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import {FlipCardModule} from './components/flip-card/flip-card.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorPickerCardComponent,
    PortafolioComponent,
    TecnologiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    FlipCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
