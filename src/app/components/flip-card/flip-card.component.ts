import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  toggleProperty = false;
  @Input() element : any;
  showDialog = false;
  elementAux : any;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

  changeDialog(element : any){
    console.log(this.elementAux, element)
    this.elementAux = element
    console.log(this.elementAux, element)

    this.showDialog = !this.showDialog
  }
  getUrl(url : string){
    return "url("+url+")" + " center center/cover no-repeat"
  }
}
