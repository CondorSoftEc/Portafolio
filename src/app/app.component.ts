import {animate, state, style, transition, trigger} from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

import {MatSidenav} from '@angular/material/sidenav';
import { Router , RouterEvent, NavigationEnd } from '@angular/router';
import {Theme} from './models/color-scheme';
import {ColorsService} from './services/colors.service';

export type FadeState = 'open' | 'closed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('state', [
      state(
        'open',
        style({
          opacity: '1',
        })
      ),
      state(
        'closed',
        style({
          opacity: '0',
        })
      ),
      transition('open => closed', [animate('500ms ease-out')]),
      transition('* => open', [animate('500ms ease-out')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit{
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @ViewChild('colorCard') input!: ElementRef<HTMLInputElement>;
  @ViewChild('buttonSettings') buttonSettings!: ElementRef<HTMLInputElement>;

  panelOpenState = false;
  isOpen = false;
  path='';

  state!: FadeState;
  // tslint:disable-next-line: variable-name
  private _show: boolean = false;

  get show() {
    return this._show;
  }

  @Input()
  set show(value: boolean) {
    if (value) {
      // show the content and set it's state to trigger fade in animation
      this._show = value;
      this.state = 'open';
    } else {
      // just trigger the fade out animation
      this.state = 'closed';
    }
  }

  onAnimationEvent(event: any) {
    if ((event.fromState === 'open') && event.toState === 'closed') {
      this._show = false;
    }
  }

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
  ];
  colors: Theme;


  constructor(private observer: BreakpointObserver, public colorsService: ColorsService, private router: Router) {
    this.colors = colorsService.theme;
  }

  ngOnInit(){
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.path = event.url
      }
    });
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 960px)']).subscribe((res) => {
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
  clickout(event: any) {
    if (!this.input.nativeElement.contains(event.target) && this.show == true && !this.buttonSettings.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }

  changeShow() {
    this.show = !this._show;
  }

  changeType(type: string) {
    this.colors.sidenav.type = type;
    localStorage.setItem('class', JSON.stringify(this.colors));
  }

  changeMode(mode: string) {
    if (mode == 'light') {
      this.colors.base = this.colorsService.lightBase.base;
      this.colors.surface = this.colorsService.lightBase.surface;
    } else {
      this.colors.base = this.colorsService.darkBase.base;
      this.colors.surface = this.colorsService.darkBase.surface;
    }
    localStorage.setItem('class', JSON.stringify(this.colors));
  }
}
