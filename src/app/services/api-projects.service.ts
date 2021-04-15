import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Project } from '../models/project-scheme';
import { Technology } from '../models/technology-scheme';
import { Tools } from '../models/tools-scheme';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectsService {

  temp = new Subject<Project[]>()
  projects = this.temp.asObservable();

  tempTech: Technology[] =[]
  tempTools: Tools[] =[]
  // tempTech = new Subject<Technology[]>()
  // projectsTech = this.tempTech.asObservable();

  // tempTools = new Subject<Tools[]>()
  // projectsTools = this.tempTools.asObservable();

  constructor() { 

    this.tempTech = [
      {
        showExample: false,
        showCode: false,
        name: 'Progressive Web Apps',
        code: [
          { filename: 'test.html', content: "  <div> PWA's <div>" },
          {
            filename: 'test.ts',
            content: `ngOnInit(): void {
                      object: true
                      }`,
          },
        ],
        example: {
          url: false,
          content:
            'Progressive Web App Example Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
          media: '../../assets/PwaExample.gif',
        },
        image: '../../assets/rayo.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      },
      {
        showExample: false,
        showCode: false,
        name: 'QR Technology',
        code: [
          { filename: 'test.html', content: '  <div> QR Technology <div>' },
          {
            filename: 'test.ts',
            content: `ngOnInit(): void {
                      qr : true 
                      }`,
          },
        ],
        example: {
          url: 'menu.bom-ec.com',
          content:
            'QR technology Example Explanation Progressive Web App Example Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
          media: '../../assets/qr.png',
        },
        image: '../../assets/rayo.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      },
      {
        name: 'Realidad Aumentada',
        code: [
          { filename: 'test.html', content: "<div> PWA's <div>" },
          {
            filename: 'test.ts',
            content: `ngOnInit(): void {
                      object: true
                      }`,
          },
        ],
        showExample: false,
        showCode: false,
        image: '../../assets/rayo.png',
        example: {
          url: 'https://condorsoftec.github.io/AugmentedReality/',
          content:
            'AR technology Example Explanation Progressive Web App Example Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
          media: '../../assets/hiro.png',
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      },
      {
        name: 'Aplicaciones Híbridas',
        code: [
          { filename: 'test.html', content: "<div> PWA's <div>" },
          {
            filename: 'test.ts',
            content: `ngOnInit(): void {
                      object: true
                      }`,
          },
        ],
        showExample: false,
        showCode: false,
        image: '../../assets/rayo.png',
        example: {
          url: false,
          content:
            'Hibrid Apps Example Explanation AR technology Example Explanation Progressive Web App Example Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
          media: '../../assets/HibridApps.png',
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      },
    ];

    this.tempTools  = [
      {
        panelOpen: false,
        image: '../../assets/rayo.png',
        title: 'Framework 1',
        url: 'https://menu.bom-ec.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. '
      },
      {
        panelOpen: false,
        image: '../../assets/rayo.png',
        title: 'Framework 2',
        url: 'https://menu.bom-ec.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. '
      },
      {
        panelOpen: false,
        image: '../../assets/rayo.png',
        title: 'Framework 3',
        url: 'https://menu.bom-ec.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. '
      },
      {
        panelOpen: false,
        image: '../../assets/rayo.png',
        title: 'Framework 4',
        url: 'https://menu.bom-ec.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. '
      },
      {
        panelOpen: false,
        image: '../../assets/rayo.png',
        title: 'Framework 5',
        url: 'https://menu.bom-ec.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. '
      },
      {
        panelOpen: false,
        image: '../../assets/rayo.png',
        title: 'Framework 6',
        url: 'https://menu.bom-ec.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique p'
      },
    ];

    setTimeout(() => {
      this.getData()
    }, 2000);
    
    
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
