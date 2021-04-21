import { Injectable } from '@angular/core';
import { Theme } from '../models/color-scheme';
import { ISourceOptions } from 'tsparticles';
import { ColorsService } from './colors.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {
  theme!: Theme;
  particlesOptions!: ISourceOptions;

  particlesEvent = new BehaviorSubject<any>(1);
  particles = this.particlesEvent.asObservable(); 

  constructor(public colors: ColorsService) { 
    this.generateParticles()
  }

  
  generateParticles(){
    this.theme = this.colors.theme;
    this.particlesOptions = {
      background: {
        color: {
          value: this.theme.base.background,
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: this.theme.surface.backgroundFull,
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color:  this.theme.surface.background,
          },
          polygon: {
            nb_sides: 3,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color:  this.theme.surface.background,
          opacity: 0.8,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 150,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 1,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
    this.particlesEvent.next(this.particlesOptions)
    console.log('Enviando Todo')
  }
}
