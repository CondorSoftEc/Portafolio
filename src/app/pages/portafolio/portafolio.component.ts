import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnInit {
  elements = [
    {
      name : 'Rayo',
      image: '../../assets/rayo.png',
      icon: '../../assets/rayo.png',
      type : 'Aplicación Mòvil',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      achievements : ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades']
    
    },{
      name : 'Rayo',
      image: '../../assets/rayo.png',
      icon: '../../assets/rayo.png',
      type : 'Aplicación Mòvil',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      achievements : ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades']
    
    },{
      name : 'Rayo',
      image: '../../assets/rayo.png',
      icon: '../../assets/rayo.png',
      type : 'Aplicación Mòvil',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      achievements : ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades']
    
    },{
      name : 'Rayo',
      image: '../../assets/rayo.png',
      icon: '../../assets/rayo.png',
      type : 'Aplicación Mòvil',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      achievements : ["app numero 1 en yantaza kljdaskljdsklads kljasdklajsdkl lkajsdkljasdkl kjklasdjkls", 'Damos trabajao a mas de', 'disponible en 3 ciudades'],      tech : ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades']
    },{
      name : 'Rayo',
      image: '../../assets/rayo.png',
      icon: '../../assets/rayo.png',
      type : 'Aplicación Mòvil',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit nulla. Vivamus et odio a dolor cursus ultricies et sit amet urna. Ut tristique posuere magna pulvinar pretium. Vestibulum in sodales leo. Aliquam tempor tellus at rutrum efficitur. Pellentesque fermentum egestas facilisis. Suspendisse in faucibus eros. ',
      achievements : ["app numero 1 en yantaza", 'Damos trabajao a mas de', 'disponible en 3 ciudades']
    
    },
  ]

  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };

  showDialog = false;
  constructor() { }

  ngOnInit(): void {
   
  }

  getUrl(url : string, asBackground : boolean = true){
    return asBackground ? "url("+url+")" + " center center/cover no-repeat" : url
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}
