import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from 'src/app/models/color-scheme';
import {Project} from 'src/app/models/project-scheme';
import {ApiProjectsService} from 'src/app/services/api-projects.service';
import {ColorsService} from 'src/app/services/colors.service';
import {Categories} from '../../enums/categories.enum';
import {ProjectsService} from '../../services/projects.service';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnInit {
  elementsObservable: Observable<Project[]>;
  showDialog = false;
  theme: Theme;
  categories = Categories;

  constructor(private api: ApiProjectsService,
              private colors: ColorsService,
              private projectsService: ProjectsService) {
    this.theme = this.colors.theme;
    this.elementsObservable = this.projectsService.getProjects();
  }

  ngOnInit(): void {
  }

  getUrl(url: string, asBackground: boolean = true): any {
    return asBackground ? 'url(' + url + ')' + ' center center/cover no-repeat' : url;
  }

}
