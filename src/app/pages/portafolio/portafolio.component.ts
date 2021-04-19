import { TypeofExpr } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { element } from 'protractor';
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
  timeToStart = 0
  filterVariables: string[] = ['Todos']
  keysCategory: string[]
  constructor(private colors: ColorsService,
    private projectsService: ProjectsService, private cd: ChangeDetectorRef) {
    this.theme = this.colors.theme;
    this.elementsObservable = this.projectsService.getProjects();
    this.keysCategory = this.getKeysCategoryTemp()
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

  getKeysCategoryTemp() {
    let iterator: any = []

    for (let key in Categories) {
      iterator.push(this.getCategoryName(key))

    }
    console.log(iterator)
    return iterator
  }

  getCategoryName(key: string) {
    return Categories[key as keyof typeof Categories]
  }

  filter(elements: Project[], projectRows: string) {
    return elements.filter((res) => { return res.type == projectRows })
  }

  chips(value: string) {
    if (value === "Todos" && !this.filterVariables.includes(value)) {
      this.filterVariables = ["Todos"]
    } else {
      if (this.filterVariables.includes(value)) {
        this.filterVariables = this.filterVariables.filter((res) => { return (res !== value) })
      } else {
        this.filterVariables.push(value)
      }
      this.filterVariables = this.filterVariables.filter((res) => { return (res !== 'Todos') })
    }
  }

  filteredKeysCategory() {
    if (this.filterVariables.includes('Todos')) return this.keysCategory
    else return this.keysCategory.filter((res) => this.filterVariables.includes(res))
  }
}
