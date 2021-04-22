import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { Theme } from 'src/app/models/color-scheme';
import { ColorsService } from 'src/app/services/colors.service';
import {
  fadeInLeftAnimation,
  fadeInOnEnterAnimation,
  fadeInRightAnimation,
  fadeInUpAnimation,
  fadeInUpOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeOutUpOnLeaveAnimation,
  rubberBandAnimation,
  zoomInAnimation,
} from 'angular-animations';
import { ParticlesService } from '../../services/particles.service';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeOutOnLeaveAnimation(),
    fadeInUpAnimation(),
    fadeInUpOnEnterAnimation(),
    fadeInOnEnterAnimation(),
    fadeInRightAnimation(),
    fadeInLeftAnimation(),
    zoomInAnimation()
  ],
})

export class HomeComponent implements OnInit {
  @ViewChild('diffImage', { static: false }) private diffImage:
    | ElementRef<HTMLDivElement>
    | undefined;
  @ViewChild('diffContent', { static: false }) private diffContent:
    | ElementRef<HTMLDivElement>
    | undefined;

  @ViewChild('diffImage2', { static: false }) private diffImage2:
    | ElementRef<HTMLDivElement>
    | undefined;
  @ViewChild('diffContent2', { static: false }) private diffContent2:
    | ElementRef<HTMLDivElement>
    | undefined;
    @ViewChild('process', { static: false }) private process:
    | ElementRef<HTMLDivElement>
    | undefined;

  isTestDivScrolledIntoView!: boolean;
  theme: Theme;
  test: any;
  onScreen: boolean = true;
  particlesOptions;
  showParticles: boolean = true;
  path = environment.assets_url;
  showArrow=false;
  elements: any = [
    {
      image: '../../../assets/mobileDev.png',
      name: 'Desarrollo Móvil y Web',
    },
    {
      image: '../../../assets/eCommerce.png',
      name: 'eCommerce',
    },
    {
      image: '../../../assets/procesos.jpg',
      name: 'Automatización de Procesos',
    },
    {
      image: '../../../assets/marketing.png',
      name: 'Marketing Digital',
    },
  ];

  imageData = [
    {
      image: '../../../assets/devops.png',
      thumbImage: '../../../assets/devops.png',
      title: 'CI / CD',
    },
    {
      image: '../../../assets/initproject.png',
      thumbImage: '../../../assets/initproject.png',
      title: 'Inicio del Proyecto',
    },
    {
      image: '../../../assets/disenDesarr.png',
      thumbImage: '../../../assets/disenDesarr.png',
      title: 'Diseño y Desarrollo',
    },
    {
      image: '../../../assets/support.png',
      thumbImage: '../../../assets/support.png',
      title: 'Soporte al Cliente',
    }
  ];
  showDiffImage: boolean = false;
  showDiffContent: boolean = false;
  showDiffImage2: boolean = false;
  showDiffContent2: boolean = false;
  showProcess: boolean = false;

  constructor(
    private colors: ColorsService,
    public particlesService: ParticlesService,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    this.theme = this.colors.theme;
    this.particlesOptions = this.particlesService.particlesOptions;
  }

  isInViewPort(element: any) {
    let rect = element.nativeElement.getBoundingClientRect(),
      windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    return !(
      Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) <
        2 ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < 2
    );
  }

  onScroll() {
    if (this.diffImage && !this.showDiffImage) {
      if (this.isInViewPort(this.diffImage)) {
        this.showDiffImage = true;
      }
    }
    if (this.diffContent && !this.showDiffContent) {
      if (this.isInViewPort(this.diffContent)) {
        this.showDiffContent = true;
      }
    }

    if (this.diffImage2 && !this.showDiffImage2) {
      if (this.isInViewPort(this.diffImage2)) {
        this.showDiffImage2 = true;
      }
    }
    if (this.diffContent2 && !this.showDiffContent2) {
      if (this.isInViewPort(this.diffContent2)) {
        this.showDiffContent2 = true;
      }
    }
    if (this.process && !this.showProcess) {
      if (this.isInViewPort(this.process)) {
        this.showProcess = true;
      }
    }
  }

  ngOnInit(): void {
    this.particlesService.particles.subscribe((res) => {
      console.log('Res', res);
      this.showParticles = false;
      setTimeout(() => {
        this.particlesOptions = res;
        this.showParticles = true;
        this.changeDetectorRef.detectChanges();
      }, 10);
    });
  }

  getUrl(url: string): any {
    return 'url(' + url + ')' + ' center center/cover no-repeat';
  }

  arrowEffect(){
    this.showArrow = true
    setTimeout(() => {
        this.showArrow = false
        this.changeDetectorRef.detectChanges()
    }, 2000);
  }
}
