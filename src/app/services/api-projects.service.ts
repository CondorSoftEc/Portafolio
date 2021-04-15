import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Project } from '../models/project-scheme';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectsService {

  temp = new Subject<Project[]>()
  projects = this.temp.asObservable();
  constructor() { 
    setTimeout(() => {
      this.getData()
    }, 1000);
    
  }

  getData(){
   
    let tempData : Project[] = [
      {
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades'],
        captures: [{
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }],
        tech: ["anguar", 'pwa', 'QR'],
        references: [{icon: 'facebook', url: 'google.com'}]
      },
      {
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades'],
        captures: [{
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }],
        tech: ["anguar", 'pwa', 'QR'],
        references: [{icon: 'facebook', url: 'google.com'}]
      },  {
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades'],
        captures: [{
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }],
        tech: ["anguar", 'pwa', 'QR'],
        references: [{icon: 'facebook', url: 'google.com'}]
      },  {
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades'],
        captures: [{
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }],
        tech: ["anguar", 'pwa', 'QR'],
        references: [{icon: 'facebook', url: 'google.com'}]
      },  {
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades', 'disponible en 3 ciudades'],
        captures: [{
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }, {
          image: '../../assets/rayo.png',
          thumbImage: '../../assets/rayo.png',
          alt: 'alt of image',
          title: 'title of image'
        }],
        tech: ["anguar", 'pwa', 'QR'],
        references: [{icon: 'facebook', url: 'google.com'}]
      }
    ]
    this.temp.next(tempData)
  }
  
}
