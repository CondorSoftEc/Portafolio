import {Component, Input, OnInit} from '@angular/core';
import { Theme } from 'src/app/models/color-scheme';
import {Project} from 'src/app/models/project-scheme';
import { ColorsService } from 'src/app/services/colors.service';

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
  theme: Theme;
  constructor(public colors : ColorsService) {
    this.theme = colors.theme
  }

  ngOnInit(): void {
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
