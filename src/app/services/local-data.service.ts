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

          /* Inicia el service worker y se encarga de cachear todo el contenido de la aplicaci??n */
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
          //Descarga las im??genes del siguiente link https://github.com/CondorSoftEc/hola-pwa.git        
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
            'Las Aplicaciones Web Progresivas buscan simular de la mejor forma posible una aplicaci??n nativa, esto sin la necesidad de que deba ser descargada de alguna tienda virtual. En la demostraci??n podr??s observar como se "instala" una PWA. El propio navegador, al verificar que se cumplan todos los requerimientos m??nimos, te mostrar?? una ventana en la parte inferior, en la cu??l te va a recomendar agregarla a la pantalla de inicio. Una vez hecho esto, podr??s ver que se comporta tal cual una aplicaci??n nativa.',
          media: '../../assets/PwaExample.gif',
        },
        image: '../../assets/PwaIcon.png',
        description:
          'Progressive web apps (o aplicaciones web progresivas), es un t??rmino que se da a una nueva generaci??n de aplicaciones que incrementan su funcionalidad, conforme las capacidades del dispositivo en el que se ejecutan, incrementan, de ah?? la palabra progresiva. El t??rmino de PWA fue acu??ado por  el desarrollador de Google Alex Russel y el dise??ador Frances Berriman. El objetivo de las PWA??s es aprovechar al m??ximo las capacidades de la web tradicional, y a partir de este punto llegar a mimetizar de la mejor forma una app nativa para tel??fonos m??viles y tabletas.',
      },

      {
        showExample: false,
        showCode: false,
        name: 'Tecnolog??a QR',
        code: [
          { filename: 'scan-qr.page.html', content: `
          <!-- Este proyecto fue realizado con el framework Ionic, y la libreria jsqr 
          que puede ser instalada a trav??s de npm -->

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
            'La tecnolog??a QR se covirti?? en un pilar fundamental para cumplir con muchos de los objetivos planteados al deasarrollar el software de manejo de restaurantes BOM. Esto debido a que con el uso de los c??digos QR, podemos compartir una cantidad inmensa de informaci??n, al cu??l se puede acceder a trav??s de un enlace. Como es el caso de este ejemplo, el link que se encuentra abajo te llevar?? a la p??gina de inicio de BOM Cliente. Aqu?? se encuentran men??s digitales e interactivos de varios restaurante, para realizar el ejemplo deber??s presionar el bot??n de escanear men?? y seguido de empezar escaneo, apuntando al c??digo QR que se encuentra a continuaci??n.',
          media: '../../assets/qr.png',
        },
        image: '../../assets/qr.jpg',
        description:
          'El c??digo QR o c??digo de Respuesta R??pida ofrece la facilidad de acceder  de una forma f??cil y sencilla a un determinado tipo de informaci??n. Los c??digos QR (del ingl??s Quick Response), aunque han sido utilizados de una forma m??s continua en tiempos recientes, fueron desarrollados por la  compa??ia japonesa  Denso Wave, all?? por el a??o 1994. En cuanto a la cantidad de datos que puede manejar al en un mismo c??digo, pueden llegar a un m??ximo de 4200 caracteres alfanum??ricos, es decir, letras y n??meros.',
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
            'En este ejemplo se ha utilizado un framework web, conocido como  A-Frame, principalmente porque puede ser utilizado directamente  en un archivo de HTML, con las respectivas importaciones, pero sin necesidad alguna de instalar alg??n programa o librer??a previamente. Tal como lo ves en el c??digo adjunto en la parte superior, eso es todo lo necesario para que se pueda desarrollar este ejemplo. Claro est??, que se puede realizar un sin??mero de acciones y actividades usando esta herramienta. Sin embargo, para evitar confundir o aburrir a quien est?? leyendo esto, prueba nuestro ejemplo pr??ctico escane??ndo el c??digo de hiro,  entrando al link de m??s abajo.',
          media: '../../assets/hiro.png',
        },
        description:
          'En la actualidad, la tecnolog??a enfocada en la Realidad Aumentada ha realizado pasos agigantados al momento de desarrollar herramientas que involucren a la comunidad tanto de profesionales, como de aficionados. La realidad aumentada puede ser utilizada en una variedad de situaciones, que van desde el simple hecho de entretenimiento (Oculus Rift, HTC Vive), hasta temas profesionales y/o empresariales (Microsoft Hololens, Google Glasses), y esto sin mensionar los diferentes frameworks y herramientas digitales que han sido desarrollados para aportar a este fin (three.js, aframe, etc). ',
      },
      {
        name: 'Aplicaciones H??bridas',
        code: [
          { filename: 'readme.md', content: 
          `
          Existe un sinn??mero de frameworks y herramientas que son utilizados 
          para desarrollar aplicaciones hibr??das.
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
            'Desde el inicio de los tiempos, cuando decidimos crear esta empresa, siempre nos encontramos fascinados por aprender y poner en pr??ctica las tecnolog??as m??s recientes en el ??mbito del desarrollo de software. Es as??, que la mayor??a de las aplicaciones y sus entornos que se ha llegado a crear dentro de la compa??ia, ponen en pr??ctica el uso de todas estas herramientas. Como por ejemplo: Rayo Xpress, BOM y MedicOS, que han sido creadas a trav??s de varios frameworks, entre los que se encuentran Ionic, Angular, NodeJS, los cuales nos han permitido llegar al p??blico en un per??do de tiempo m??s corto, ya que se necesita de solamente un "c??digo" destinado a todos los usuarios.',
          media: '../../assets/HibridApps.png',
        },
        description:
          'Las aplicaciones h??bridas son en realidad aplicaciones m??viles que se encuentran dise??adas  a partir de un lenguaje de programaci??n web, por lo general dichos lenguajes son HTML, CSS, javascript, typescript, etc. A dichos lenguajes de programaci??n se los incluye dentro de un framework (tambi??n conocido como el entorno de trabajo),  el cual se va a encargar de configurar y adaptar  la vista web que se ha creado, a cualquier vista de un dispositivo m??vil.',
      },
    ];

    this.tempTools  = [ { name: 'Frontend', software: [ {
        panelOpen: false,
        image: '../../assets/angular.png',
        title: 'Angular',
        url: 'https://angular.io/',
        description: 'Framework para aplicaciones web, desarrollado en Typescript, open source, desarrollado y mantenido por Google.'
      },
      {
        panelOpen: false,
        image: '../../assets/ionic.png',
        title: 'Ionic Framework',
        url: 'https://ionicframework.com/',
        description: 'Un framework open source  orientado al desarrollo de aplicaciones m??viles y web de gran calidad, multiplataforma y con un solo c??digo base'
      },
      {
        panelOpen: false,
        image: '../../assets/react.png',
        title: 'React Native',
        url: 'https://reactnative.dev/',
        description: 'Uno de los frameworks m??s utilizados para desarrollar aplicaciones h??bridas. Al ser desarrollado y mantenido por Facebook, se convierte en una excelente opci??n para programar'
      },
      {
        panelOpen: false,
        image: '../../assets/flutter.png',
        title: 'Flutter',
        url: 'https://flutter.dev/',
        description: 'Flutter es un framework desarrollado por Google, con el objetivo de crear aplicaciones nativas, ya sea para dispositivos m??viles, navegadores, e incluso aplicaciones de escritorio, a partir de un c??digo base.'
      },
      {
        panelOpen: false,
        image: '../../assets/bootstrap.png',
        title: 'Bootstrap',
        url: 'https://getbootstrap.com/',
        description: 'Una herramienta de c??digo abierto, desarrollada por Twitter all?? por el a??o 2010 (En un inicio su nombre fue Twitter Blueprint). El objetivo de la misma es permitir que la p??gina realizada se pueda adaptar al tama??o del dispositivo desde el cual se la est?? utilizando, a trav??s de un dise??o responsive.'
      },
      {
        panelOpen: false,
        image: '../../assets/wordpress.png',
        title: 'Wordpress',
        url: 'https://wordpress.com/es/',
        description: 'Es un sistema de gesti??n de contenidos (Tradicionalmente conocido como CMS), el cual permite la creaci??n y el mantenimiento de cualquier tipo de p??gina web. La mayor parte de este sistema se encuentra programado con el lenguaje php. Un dato interesante es que actualmente existen m??s de 75 millones de sitios creados con esta herramienta.'
      } ]
     },
     { name: 'Backend y Almacenamiento de Datos', software: [ {
      panelOpen: false,
      image: '../../assets/firebase.png',
      title: 'Firebase',
      url: 'https://firebase.google.com/',
      description: 'Desarrollado por Google, Firebase se convierte en un excelente aliado para el desarrollo de aplicaciones. Entre las principales funcionalidades que ofrece, est??n: Bases de Datos, Analitycs, Push Notifications, multiplataforma.'
    },
    {
      panelOpen: false,
      image: '../../assets/node.jpg',
      title: 'Node JS',
      url: 'https://nodejs.org/es/',
      description: 'Se trata de un framework  de c??digo abierto, orientado a trabajar en la  capa del Servidor, y basado en el  lenguaje de programaci??n Javascript. Creado con el objetivo de ser ??til en la  creaci??n de programas  de red altamente escalables, como por ejemplo, servidores Web.'
    },
    {
      panelOpen: false,
      image: '../../assets/couch.png',
      title: 'CouchDB',
      url: 'https://couchdb.apache.org/',
      description: 'Es un gestor de bases de datos de c??digo abierto. La misma es NoSQL, raz??n por la cual  emplea el modelo JSON  para almacenar los datos, as?? como tambi??n uas Javascript como lenguaje de consulta. Es una herramienta ideal para desarrollar offline first apps.'
    },
    {
      panelOpen: false,
      image: '../../assets/mongo.png',
      title: 'MongoDB',
      url: 'https://www.mongodb.com/es',
      description: 'MongoDB es una base de datos distribuida, basada en documentos y de uso general que ha sido dise??ada para desarrolladores de aplicaciones modernas y para la era de la nube. Ha sido utilizada por grandes empresas, entre ellas: Google, SEGA, ebay, Verizon, EA, etc.'
    },
    {
      panelOpen: false,
      image: '../../assets/django.jpg',
      title: 'Django',
      url: 'https://www.djangoproject.com/',
      description: 'Django es un framework web dise??ado para realizar aplicaciones de cualquier complejidad en periodos de tiempo m??s cortos. El mismo se encuentra escrito en Python y posee una comunidad inmensa que siempre se encuentra mejorando la herramienta.'
    },
    {
      panelOpen: false,
      image: '../../assets/postgresql.png',
      title: 'PostgreSQL',
      url: 'https://www.postgresql.org/',
      description: 'Se trata de una de las bases de datos relacionales m??s utilizadas en el campo de la tecnolog??a. LLeva ya m??s de 30 a??os de continuo desarrollo y mejoras, lo cual le ha creado una excelente fiabilidad, desempe??o y rendimiento'
    } ]
   },
   { name: 'An??lisis de Datos y Machine Learning', software: [ {
    panelOpen: false,
    image: '../../assets/Firebase-Analytics.png',
    title: 'Firebase Analytics',
    url: 'https://firebase.google.com/products/analytics',
    description: 'Google Analytics para firebase proporciona informes ilimitados y gratuitos de  hasta 500 eventos diferentes. Este tipo informaci??n puede ser escencial para la correcci??n de errores, definir futuras mejoras en la aplicaci??n, e incluso  realizar eventos personalizados para medir factores importantes'
  },
  {
    panelOpen: false,
    image: '../../assets/tensor.png',
    title: 'TensorFlow',
    url: 'https://www.tensorflow.org/',
    description: 'Es una  plataforma open source, orientado  al aprendizaje autom??tico. Es una de los frameworks m??s utilizados en este campo por  la variedad de herramientas,  bibliotecas, y recursos que ofrece la misma y su comunidad.'
  },
  {
    panelOpen: false,
    image: '../../assets/keras.png',
    title: 'Keras',
    url: 'https://keras.io/',
    description: 'Es un API (Application Programming Interface) desarrollada aplicando las mejores t??cnicas para hacerla sencilla y f??cil de utilizar para tecnolog??as deep learning, redes convoluttivas, predicciones de series de tiempo.'
  },
  {
    panelOpen: false,
    image: '../../assets/chatbot.png',
    title: 'ChatBots',
    url: 'https://www.codecademy.com/learn/paths/build-chatbots-with-python',
    description: 'La forma m??s sencilla para definit un chatbot es la siguiente: un asistente automatizado que se comunica con  los usuarios  a trav??s de  mensajes de texto. En vista de que se trata de un asistente automatizado, es necesario previamente "ense??arle" todo lo que necesita saber para mantener una conversaci??n clara con el usuario y poder ayudar.'
  }
]
 }
    ];
  }
}
