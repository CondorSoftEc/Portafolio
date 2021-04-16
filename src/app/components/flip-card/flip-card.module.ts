import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import { FlipCardFrontComponent } from './flip-card-front';
import { FlipCardBackComponent } from './flip-card-back';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent} from '../dialog/dialog.component'
import {MatDividerModule} from '@angular/material/divider'
import { NgImageSliderModule } from 'ng-image-slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';





@NgModule({
  declarations: [FlipCardComponent, FlipCardFrontComponent, FlipCardBackComponent, DialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    NgImageSliderModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [FlipCardComponent, FlipCardFrontComponent, FlipCardBackComponent]
})
export class FlipCardModule { }
