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


  constructor() { 

    setTimeout(() => {
      this.getData()
    }, 10);
    
  }

  getData(){
   
    let tempData : Project[] = [
      {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      }, {
        id:"1",
        name: 'Rayo',
        image: '../../assets/rayo.png',
        icon: '../../assets/rayo.png',
        type: 'Aplicación Mòvil',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
        achievements: [{name: "app numero 1 en yantaza", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nuLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. "}],
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
        tech: [{name:"angular", url:"google.com"}],
        references: [{icon: 'facebook', url: 'google.com'}]
      },
    ]
    this.temp.next(tempData)
  }


  
}
