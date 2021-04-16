import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/color-scheme';
import { Project } from 'src/app/models/project-scheme';
import { ColorsService } from 'src/app/services/colors.service';
import { Categories } from '../../enums/categories.enum';
import { ProjectsService } from '../../services/projects.service';


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
  starting = true;
  timeToStart = 2500
  constructor(private colors: ColorsService,
    private projectsService: ProjectsService, private cd: ChangeDetectorRef) {
    this.theme = this.colors.theme;
    this.elementsObservable = this.projectsService.getProjects();
  }

  ngOnInit() {
      setTimeout(() => {
        this.starting = false
        this.cd.detectChanges()
      }, this.timeToStart);
  }

  getUrl(url: string, asBackground: boolean = true): any {
    return asBackground ? 'url(' + url + ')' + ' center center/cover no-repeat' : url;
  }

}
