import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {trace} from '@angular/fire/performance';
import {map} from 'rxjs/operators';
import {Project} from '../models/project-scheme';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private afStore: AngularFirestore) {
  }

  //
  // getProjects(): any {
  //   return this.afStore.collection('projects',
  //     ref => ref.orderBy('name', 'asc')).snapshotChanges();
  // }

  getProjects(): Observable<Project[]> {
    return this.afStore.collection('projects',
      ref => ref.orderBy('name', 'asc')).snapshotChanges().pipe(map(arr => {
        return arr.map(snap => {
          const data = snap.payload.doc.data();
          const id = snap.payload.doc.id;
          // @ts-ignore
          return {id, ...data} as Project;
        });
      }, (err: any) => console.log(err)),
      trace('projectsList'));

  }


  getProject(projectId: any): any {
    return this.afStore.collection('projects').doc(projectId).snapshotChanges();
  }


}
