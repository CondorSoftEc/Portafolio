import { animate, state, style, transition, trigger } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/color-scheme';
import { Project } from 'src/app/models/project-scheme';
import { ApiProjectsService } from 'src/app/services/api-projects.service';
import { ColorsService } from 'src/app/services/colors.service';



@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnInit {
  elementsObservable: Observable<Project[]>;
  showDialog = false;
  theme : Theme;
  constructor(private api:ApiProjectsService, private colors : ColorsService) { 
    this.theme = this.colors.theme
    this.elementsObservable = this.api.projects
  }

  ngOnInit(): void {

  }

  getUrl(url: string, asBackground: boolean = true) {
    return asBackground ? "url(" + url + ")" + " center center/cover no-repeat" : url
  }

}
