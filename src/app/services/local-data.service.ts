import { Injectable } from '@angular/core';
import { Technology } from '../models/technology-scheme';
import { Tools } from '../models/tools-scheme';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {


  tempTech: Technology[] =[]
  tempTools: Tools[] =[]

  constructor() {
    this.tempTech = [
      {
        showExample: false,
        showCode: false,
        name: 'Progressive Web Apps',
        code: [
          { filename: 'index.html', content: `
          <!-- La estructura del Proyecto es la siguiente, puedes descargar el repositorio en https://github.com/CondorSoftEc/hola-pwa.git
          /Hello-PWA   # Raiz del Proyecto
            /css     # Carpeta con los archivos de estilos
            /js      # Carpeta con los archivos js
            /images  # Carpeta con las Imagenes -->


          <!-- Structure 
          <!doctype html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Hello World</title>
            <link rel="stylesheet" href="css/style.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="manifest" href="/manifest.json">
            <meta name="theme-color" content="white"/>
          </head>
          <body class="fullscreen">
            <div class="container">
              <h1 class="title">Hola Mundo!</h1>
            </div>
            <script src="js/main.js"></script>
          </body>
          </html>
          ` },
          {
            filename: 'css/style.css' , content: `
            body {
              font-family: sans-serif;
            }
            
            /* Hacer que el area llene la ventana completa del navegador */
            html,
            .fullscreen {
              display: flex;
              height: 100%;
              margin: 0;
              padding: 0;
              width: 100%;
            }
            
            /* Centrar el contenido en la ventana del navegador */
            .container {
              margin: auto;
              text-align: center;
            }
            
            .title {
              font-size: 3rem;
            }
            `
          },
          {filename: 'sw.js', content: `
          var cacheName = 'hello-pwa';
          var filesToCache = [
            '/',
            '/index.html',
            '/css/style.css',
            '/js/main.js'
          ];

          /* Inicia el service worker y se encarga de cachear todo el contenido de la aplicación */
          self.addEventListener('install', function(e) {
            e.waitUntil(
              caches.open(cacheName).then(function(cache) {
                return cache.addAll(filesToCache);
              })
            );
          });

          /* Muestra el contenido cacheado cuando se encuentra en modo offline */
          self.addEventListener('fetch', function(e) {
            e.respondWith(
              caches.match(e.request).then(function(response) {
                return response || fetch(e.request);
              })
            );
          });
          `},
          { filename:"js/main.js", content: `
          window.onload = () => {
            'use strict';
          
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker
                       .register('./sw.js');
            }
          }
          `
          },
          {
          filename: 'manifest.json', content: `
          //Descarga las imágenes del siguiente link https://github.com/CondorSoftEc/hola-pwa.git        
          {
            "name": "Hello World",
            "short_name": "Hello",
            "icons": [{
              "src": "images/hello-icon-128.png",
                "sizes": "128x128",
                "type": "image/png"
              }, {
                "src": "images/hello-icon-144.png",
                "sizes": "144x144",
                "type": "image/png"
              }, {
                "src": "images/hello-icon-152.png",
                "sizes": "152x152",
                "type": "image/png"
              }, {
                "src": "images/hello-icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
              }, {
                "src": "images/hello-icon-256.png",
                "sizes": "256x256",
                "type": "image/png"
              }, {
                "src": "images/hello-icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
              }],
            "lang": "es-ES",
            "start_url": "/index.html",
            "display": "standalone",
            "background_color": "white",
            "theme_color": "white"
          }
            `
          }
        ],
        example: {
          url: 'https://condorsoftec.github.io/hola-pwa/',
          content:
            'Las Aplicaciones Web Progresivas buscan simular de la mejor forma posible una aplicación nativa, esto sin la necesidad de que deba ser descargada de alguna tienda virtual. En la demostración podrás observar como se "instala" una PWA. El propio navegador, al verificar que se cumplan todos los requerimientos mínimos, te mostrará una ventana en la parte inferior, en la cuál te va a recomendar agregarla a la pantalla de inicio. Una vez hecho esto, podrás ver que se comporta tal cual una aplicación nativa.',
          media: '../../assets/PwaExample.gif',
        },
        image: '../../assets/PwaIcon.png',
        description:
          'Progressive web apps (o aplicaciones web progresivas), es un término que se da a una nueva generación de aplicaciones que incrementan su funcionalidad, conforme las capacidades del dispositivo en el que se ejecutan, incrementan, de ahí la palabra progresiva. El término de PWA fue acuñado por  el desarrollador de Google Alex Russel y el diseñador Frances Berriman. El objetivo de las PWA´s es aprovechar al máximo las capacidades de la web tradicional, y a partir de este punto llegar a mimetizar de la mejor forma una app nativa para teléfonos móviles y tabletas.',
      },

      {
        showExample: false,
        showCode: false,
        name: 'Tecnología QR',
        code: [
          { filename: 'scan-qr.page.html', content: `
          <!-- Este proyecto fue realizado con el framework Ionic, y la libreria jsqr 
          que puede ser instalada a través de npm -->

          <ion-header>
            <ion-toolbar class="toolbar">
                <div style="text-align : center; font-weight: bold">Scanner QR</div>
                <div (click)="closeModal()" slot="start">
                    <ion-icon style="zoom: 1.5; margin-left: 10px;" name="arrow-back-outline"></ion-icon>
                </div>
            </ion-toolbar>
          </ion-header>

          <ion-content>
          <div *ngIf="!scanActive" style="text-align: center; margin-top:70px">
              <ion-button shape="round" color="tertiary" size="large" (click)="startScan()">
                  <ion-icon slot="start" name="qr-code-sharp"></ion-icon>
                  Empezar Escaneo
              </ion-button>
          </div>


          <video #video [hidden]="!scanActive" width="100%"></video>

          <canvas #canvas hidden></canvas>

          <div style="text-align: center;">
              <ion-button *ngIf="scanActive" shape="round" color="danger" (click)="stopScan()">
                  <ion-icon slot="start" name="qr-code-sharp"></ion-icon>
                  Detener Escaneo
              </ion-button>
          </div>

          </ion-content>

          ` },
          {
            filename: 'scan-qr.page.scss',
            content: `
            .toolbar {
              color: white;
              --background: #ff3333;
            }
            `
          },
          {
            filename: 'scan-qr-routing.module.ts',
            content: `
            import { NgModule } from '@angular/core';
            import { Routes, RouterModule } from '@angular/router';

            import { ScanQrPage } from './scan-qr.page';

            const routes: Routes = [
              {
                path: '',
                component: ScanQrPage
              }
            ];

            @NgModule({
              imports: [RouterModule.forChild(routes)],
              exports: [RouterModule],
            })
            export class ScanQrPageRoutingModule {}
            `
          }, {
            filename: 'scan-qr.module.ts',
            content: `
            import { NgModule } from '@angular/core';
            import { CommonModule } from '@angular/common';
            import { FormsModule } from '@angular/forms';

            import { IonicModule } from '@ionic/angular';

            import { ScanQrPageRoutingModule } from './scan-qr-routing.module';

            import { ScanQrPage } from './scan-qr.page';

            @NgModule({
              imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ScanQrPageRoutingModule
              ],
              declarations: [ScanQrPage]
            })
            export class ScanQrPageModule {}
            `
          },
          {
            filename: 'scan-qr.page.spec.ts',
            content: `
            import { async, ComponentFixture, TestBed } from '@angular/core/testing';
            import { IonicModule } from '@ionic/angular';

            import { ScanQrPage } from './scan-qr.page';

            describe('ScanQrPage', () => {
              let component: ScanQrPage;
              let fixture: ComponentFixture<ScanQrPage>;

              beforeEach(async(() => {
                TestBed.configureTestingModule({
                  declarations: [ ScanQrPage ],
                  imports: [IonicModule.forRoot()]
                }).compileComponents();

                fixture = TestBed.createComponent(ScanQrPage);
                component = fixture.componentInstance;
                fixture.detectChanges();
              }));

              it('should create', () => {
                expect(component).toBeTruthy();
              });
            });

            `
          },
          {filename: 'scan-qr.page.ts',
          content:`
          import { Component, ElementRef, ViewChild } from '@angular/core';
          import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
          import jsQR from 'jsqr';
          
          @Component({
            selector: 'app-scan-qr',
            templateUrl: './scan-qr.page.html',
            styleUrls: ['./scan-qr.page.scss'],
          })
          export class ScanQrPage {
          
            @ViewChild('video', { static: false }) video: ElementRef;
            @ViewChild('canvas', { static: false }) canvas: ElementRef;
          
          
          
            canvasElement: any;
            videoElement: any;
            canvasContext: any;
            scanActive = false;
            scanResult = null;
            stopPressed = false;
            loading2: HTMLIonLoadingElement = null;
            /////////////////////////////
          
          
            constructor(private plt: Platform,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController) {
          
              ////// QR
              const isInStandaloneMode = () =>
                'standalone' in window.navigator && window.navigator['standalone'];
              if (this.plt.is('ios') && isInStandaloneMode()) {
                console.log('Estoy en una IOS PWA!');
              }
            }
          
            /////////// Parte del QR SCAN ///////////////////
          
            ngAfterViewInit() {
              this.canvasElement = this.canvas.nativeElement;
              this.canvasContext = this.canvasElement.getContext('2d');
              this.videoElement = this.video.nativeElement;
            }
          
            closeModal() {
              this.modalCtrl.dismiss();
          }
          
            async startScan() {
              this.stopPressed = false
              // No funciona en iOS standalone mode!
              const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }
              });
          
              this.videoElement.srcObject = stream;
              // Para Safari
              this.videoElement.setAttribute('playsinline', true);
          
              this.loading2 = await this.loadingCtrl.create({});
              await this.loading2.present();
          
              this.videoElement.play();
              requestAnimationFrame(this.scan.bind(this));
            }
          
            async scan() {
              if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
                if (this.loading2 && !this.stopPressed) {
                  await this.loading2.dismiss();
                  this.loading2 = null;
                  this.scanActive = true;
                }
          
                this.canvasElement.height = this.videoElement.videoHeight;
                this.canvasElement.width = this.videoElement.videoWidth;
          
                this.canvasContext.drawImage(
                  this.videoElement,
                  0,
                  0,
                  this.canvasElement.width,
                  this.canvasElement.height
                );
                const imageData = this.canvasContext.getImageData(
                  0,
                  0,
                  this.canvasElement.width,
                  this.canvasElement.height
                );
                const code = jsQR(imageData.data, imageData.width, imageData.height, {
                  inversionAttempts: 'dontInvert'
                });
          
                if (code) {
                  this.scanActive = false;
                  this.scanResult = code.data;
                  window.open(this.scanResult, "_self");
                } else {
                  if (this.scanActive) {
                    requestAnimationFrame(this.scan.bind(this));
                  }
                }
              } else {
          
                requestAnimationFrame(this.scan.bind(this));
              }
            }

          
            stopScan() {
              this.scanActive = false;
              this.stopPressed = true;
              console.log('ScanActive', this.scanActive)
            }
          
          
          }
          `}
        ],
        example: {
          url: 'https://menu.bom-ec.com',
          content:
            'La tecnología QR se covirtió en un pilar fundamental para cumplir con muchos de los objetivos planteados al deasarrollar el software de manejo de restaurantes BOM. Esto debido a que con el uso de los códigos QR, podemos compartir una cantidad inmensa de información, al cuál se puede acceder a través de un enlace. Como es el caso de este ejemplo, el link que se encuentra abajo te llevará a la página de inicio de BOM Cliente. Aquí se encuentran menús digitales e interactivos de varios restaurante, para realizar el ejemplo deberás presionar el botón de escanear menú y seguido de empezar escaneo, apuntando al código QR que se encuentra a continuación.',
          media: '../../assets/qr.png',
        },
        image: '../../assets/qr.jpg',
        description:
          'El código QR o código de Respuesta Rápida ofrece la facilidad de acceder  de una forma fácil y sencilla a un determinado tipo de información. Los códigos QR (del inglés Quick Response), aunque han sido utilizados de una forma más continua en tiempos recientes, fueron desarrollados por la  compañia japonesa  Denso Wave, allá por el año 1994. En cuanto a la cantidad de datos que puede manejar al en un mismo código, pueden llegar a un máximo de 4200 caracteres alfanuméricos, es decir, letras y números.',
      },

      {
        name: 'Realidad Aumentada',
        code: [
          { filename: 'index.html', content: `
          <!DOCTYPE html>
          <html>
            <head>
              <!-- script de A-Frane version1 1.0.0 -->
              <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
              <!-- script de AR.JS con soporte de marker + location -->
              <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
            </head>
              <body style="margin : 0px; overflow: hidden;">
                  <a-scene embedded arjs>
                <a-marker preset="hiro">
                  <a-sphere position="0 0 0" radius="0.6" color="#EF2D5E"></a-sphere>
                </a-marker>
                  <a-entity camera></a-entity>
                  </a-scene>
              </body>
          </html>
          `},

        ],
        showExample: false,
        showCode: false,
        image: '../../assets/A-Frame.png',
        example: {
          url: 'https://condorsoftec.github.io/AugmentedReality/',
          content:
            'En este ejemplo se ha utilizado un framework web, conocido como  A-Frame, principalmente porque puede ser utilizado directamente  en un archivo de HTML, con las respectivas importaciones, pero sin necesidad alguna de instalar algún programa o librería previamente. Tal como lo ves en el código adjunto en la parte superior, eso es todo lo necesario para que se pueda desarrollar este ejemplo. Claro está, que se puede realizar un sinúmero de acciones y actividades usando esta herramienta. Sin embargo, para evitar confundir o aburrir a quien esté leyendo esto, prueba nuestro ejemplo práctico escaneándo el código de hiro,  entrando al link de más abajo.',
          media: '../../assets/hiro.png',
        },
        description:
          'En la actualidad, la tecnología enfocada en la Realidad Aumentada ha realizado pasos agigantados al momento de desarrollar herramientas que involucren a la comunidad tanto de profesionales, como de aficionados. La realidad aumentada puede ser utilizada en una variedad de situaciones, que van desde el simple hecho de entretenimiento (Oculus Rift, HTC Vive), hasta temas profesionales y/o empresariales (Microsoft Hololens, Google Glasses), y esto sin mensionar los diferentes frameworks y herramientas digitales que han sido desarrollados para aportar a este fin (three.js, aframe, etc). ',
      },
      {
        name: 'Aplicaciones Híbridas',
        code: [
          { filename: 'readme.md', content: 
          `
          Existe un sinnúmero de frameworks y herramientas que son utilizados 
          para desarrollar aplicaciones hibrídas.
          Sin embargo, te compartimos las que han sido utilizadas por nosotros:

          Ionic Framework:  https://www.ionicframework.com/
          React Native:  https://www.reactnative.dev/
          Flutter: https://www.flutter.dev/
          `},
        ],
        showExample: false,
        showCode: false,
        image: '../../assets/hybrid-Apps.png',
        example: {
          url: false,
          content:
            'Desde el inicio de los tiempos, cuando decidimos crear esta empresa, siempre nos encontramos fascinados por aprender y poner en práctica las tecnologías más recientes en el ámbito del desarrollo de software. Es así, que la mayoría de las aplicaciones y sus entornos que se ha llegado a crear dentro de la compañia, ponen en práctica el uso de todas estas herramientas. Como por ejemplo: Rayo Xpress, BOM y MedicOS, que han sido creadas a través de varios frameworks, entre los que se encuentran Ionic, Angular, NodeJS, los cuales nos han permitido llegar al público en un perído de tiempo más corto, ya que se necesita de solamente un "código" destinado a todos los usuarios.',
          media: '../../assets/HibridApps.png',
        },
        description:
          'Las aplicaciones híbridas son en realidad aplicaciones móviles que se encuentran diseñadas  a partir de un lenguaje de programación web, por lo general dichos lenguajes son HTML, CSS, javascript, typescript, etc. A dichos lenguajes de programación se los incluye dentro de un framework (también conocido como el entorno de trabajo),  el cual se va a encargar de configurar y adaptar  la vista web que se ha creado, a cualquier vista de un dispositivo móvil.',
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
   }
}
