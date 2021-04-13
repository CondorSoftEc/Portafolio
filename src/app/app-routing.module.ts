import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {PortafolioComponent} from './pages/portafolio/portafolio.component'
import {TecnologiaComponent} from './pages/tecnologia/tecnologia.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent ,
  },
  {
    path: "portafolio",
    component: PortafolioComponent ,
  },
  {
    path: "technology",
    component: TecnologiaComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
