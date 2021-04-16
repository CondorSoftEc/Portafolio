import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Project} from '../models/project-scheme';
import {Technology} from '../models/technology-scheme';
import {Tools} from '../models/tools-scheme';
import {ProjectsService} from './projects.service';
import {map} from 'rxjs/operators';
import {trace} from '@angular/fire/performance';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectsService {

  temp = new Subject<Project[]>();
  projects = this.temp.asObservable();


  constructor(private projectsService: ProjectsService) {
    setTimeout(() => {
      this.getData();
    }, 10);

  }

  getData() {
    const tempData: Project[] = [];
     this.temp.next(tempData);
  }


}
