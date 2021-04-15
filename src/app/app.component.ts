import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { Theme } from './models/color-scheme';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: '1'
        })
      ),
      state(
        'closed',
        style({
          opacity: '0',
          visibility : 'hidden'
        })
      ),
      transition('open => closed', [animate('500ms ease-out')]),
      transition('closed => open', [animate('500ms ease-out')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @ViewChild('colorCard') input!: ElementRef<HTMLInputElement>;
  @ViewChild('buttonSettings') buttonSettings!: ElementRef<HTMLInputElement>;

  panelOpenState = false;
  isOpen = false;
  
  links = [
    {
      name: 'Acerca de nosotros',
      path: 'home',
      icon: 'contact_page'
    },
    {
      name: ' Portafolio',
      path: 'portafolio',
      icon: 'folder_open'
    },
    {
      name: 'Tecnología que usamos',
      path: 'technology',
      icon: 'devices'
    }
  ]
  colors : Theme;
  



  constructor(private observer: BreakpointObserver, public colorsService : ColorsService) {
    this.colors = colorsService.theme
   }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event : any) {
    if(!this.input.nativeElement.contains(event.target) && this.isOpen == true && !this.buttonSettings.nativeElement.contains(event.target)) {
      this.isOpen = false
    } 
  }

  changeShow(){
    this.isOpen = !this.isOpen;
  }

  changeType(type : string){
    this.colors.sidenav.type = type
    localStorage.setItem('class', JSON.stringify(this.colors))
  }
  
  changeMode(mode: string){
    if (mode == 'light'){
      this.colors.base = this.colorsService.lightBase.base 
      this.colors.surface =this.colorsService.lightBase.surface
    }else{
      this.colors.base = this.colorsService.darkBase.base 
      this.colors.surface =this.colorsService.darkBase.surface
    }    
    localStorage.setItem('class', JSON.stringify(this.colors))
  }
}
