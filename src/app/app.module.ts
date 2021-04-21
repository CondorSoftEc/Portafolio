import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Matertial chidorin
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './pages/home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {ColorPickerCardComponent} from './components/color-picker-card/color-picker-card.component';
import {MatMenuModule} from '@angular/material/menu';
import {PortafolioComponent} from './pages/portafolio/portafolio.component';
import {TecnologiaComponent} from './pages/tecnologia/tecnologia.component';
import {FlipCardModule} from './components/flip-card/flip-card.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {NgImageSliderModule} from 'ng-image-slider';


// Code Snippets

import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {CodeSnippetComponent} from './components/code-snippet/code-snippet.component';
import {ExamplesComponent} from './components/examples/examples.component';
import {environment} from '../environments/environment';
import {PerformanceMonitoringService} from '@angular/fire/performance';
import {AngularFireAnalyticsModule, ScreenTrackingService} from '@angular/fire/analytics';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {NgParticlesModule} from "ng-particles";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorPickerCardComponent,
    PortafolioComponent,
    TecnologiaComponent,
    CodeSnippetComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    FlipCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    HighlightModule,
    NgImageSliderModule,
    NgParticlesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAnalyticsModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js')
    }
  },
    ScreenTrackingService,
    PerformanceMonitoringService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
