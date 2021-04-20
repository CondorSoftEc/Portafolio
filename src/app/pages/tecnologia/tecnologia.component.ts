import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme } from 'src/app/models/color-scheme';
import { ColorsService } from 'src/app/services/colors.service';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TecnologiaComponent implements OnInit {
  elementsTech;
  tools;
  theme : Theme;

  constructor( private localDataService: LocalDataService, public colors : ColorsService) {
    this.elementsTech = this.localDataService.tempTech
    this.tools = this.localDataService.tempTools
    this.theme = colors.theme
  }

  ngOnInit(): void {}

  toggleCode(i: number) {
    this.elementsTech[i]['showExample']=false
    this.elementsTech[i]['showCode'] = this.elementsTech[i]['showCode']
      ? !this.elementsTech[i]['showCode']
      : true;
  }

  toggleExample(i: number) {
    this.elementsTech[i]['showCode']=false
    this.elementsTech[i]['showExample'] = this.elementsTech[i]['showExample']
      ? !this.elementsTech[i]['showExample']
      : true;
  }

  getUrl(url: string, asBackground: boolean = true) {
    return asBackground
      ? 'url(' + url + ')' + ' center center/cover no-repeat'
      : url;
  }

  controlExpansionPanel(i: number, j: number){
    this.tools[i].software[j].panelOpen =  this.tools[i].software[j].panelOpen ?  !this.tools[i].software[j].panelOpen : true
  }
}
