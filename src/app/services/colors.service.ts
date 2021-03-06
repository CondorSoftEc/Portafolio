import { Injectable } from '@angular/core';
import { Theme } from '../models/color-scheme';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  theme : Theme;

  darkBase = {
    base : {
      color: "white",
      background:"#1a1a1d",
      divider:"gray"
    },
    surface : {
      color: "white",
      background:"rgb(36, 46, 58)",
      backgroundFull: "#ffffff",
      divider:"gray"
    }
  }

  lightBase = {
    base : {
      color: "black",
      background:"#fafafa",
      divider:"gray"
    },
    surface : {
      color: "black",
      background:"#eae3db",
      backgroundFull: "#000000",
      divider:"gray"
    }
  }

  constructor() {
    this.theme = {
      sidenav : {
        type:"fourthSidenav",
        color: "white"
      },
      base : this.darkBase.base,
      surface : this.darkBase.surface
    }
    let classColors = localStorage.getItem('class')
    if (classColors)
    if (classColors) this.theme = JSON.parse(classColors)
    localStorage.setItem('class', JSON.stringify(this.theme))

   }
}
