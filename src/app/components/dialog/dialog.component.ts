import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() element! : any;
  class : any;
  @Input() visible!: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    let temp  = localStorage.getItem('class')
    if (temp){
      this.class =  JSON.parse(temp)
    }
   
    console.log(this.element)
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  getUrl(url : string, asBackground : boolean = true){
    console.log(this.element)
    return asBackground ? "url("+url+")" + " center center/cover no-repeat" : url
  }
}
