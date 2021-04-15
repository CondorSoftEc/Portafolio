import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/models/color-scheme';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent  {
  @Input() closable = true;
  @Input() element! : any;
  theme : Theme;
  @Input() visible!: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private color : ColorsService) {
    this.theme = this.color.theme
   }


  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  getUrl(url : string, asBackground : boolean = true){
    return asBackground ? "url("+url+")" + " center center/cover no-repeat" : url
  }
}
