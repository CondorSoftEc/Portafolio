import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme } from 'src/app/models/color-scheme';
import { ColorsService } from 'src/app/services/colors.service';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TecnologiaComponent  implements OnInit{
  elementsTech!:any;
  tools!:any;
  theme : Theme;

  constructor( private localDataService: LocalDataService, public colors : ColorsService, private cd : ChangeDetectorRef) {
    
    
    this.theme = colors.theme
  }

  ngOnInit(){
    setTimeout(() => {
      this.elementsTech = this.localDataService.tempTech
      this.tools = this.localDataService.tempTools
      this.cd.detectChanges()
    }, 1000);
  }

  toggleCode(i: number) {
    console.log('se manda toogle')
    this.elementsTech[i]['showExample']=false
    this.elementsTech[i]['showCode'] = this.elementsTech[i]['showCode']
      ? !this.elementsTech[i]['showCode']
      : true;
  }

  toggleExample(i: number) {
    console.log('se manda toogle 2')
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
    console.log('se manda el panel')
    this.tools[i].software[j].panelOpen =  this.tools[i].software[j].panelOpen ?  !this.tools[i].software[j].panelOpen : true
  }
}
