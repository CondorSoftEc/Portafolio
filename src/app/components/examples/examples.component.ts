import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  @Input() example : any;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl(url : string, asBackground : boolean = true){
    return asBackground ? "url("+url+")" + " center center/cover no-repeat" : url
  }

}
