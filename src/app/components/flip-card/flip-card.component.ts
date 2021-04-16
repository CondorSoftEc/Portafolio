import {Component, Input, OnInit} from '@angular/core';
import {Project} from 'src/app/models/project-scheme';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  toggleProperty = false;
  @Input() element: any;
  showDialog = false;
  elementAux?: Project;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.element);
  }

  toggle(): void {
    this.toggleProperty = !this.toggleProperty;
  }

  changeDialog(element: Project): void {
    this.elementAux = element;
    this.showDialog = !this.showDialog;
  }

  getUrl(url: string): any {
    return 'url(' + url + ')' + ' center center/cover no-repeat';
  }
}
