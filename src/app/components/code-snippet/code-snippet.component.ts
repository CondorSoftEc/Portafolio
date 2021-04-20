import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Theme } from 'src/app/models/color-scheme';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeSnippetComponent implements OnInit {
  @Input() code : any;
  theme : Theme;
  constructor( private snackBar: MatSnackBar, private color : ColorsService) {
    this.theme = this.color.theme
   }

  ngOnInit(): void {
  }

  copyToClipboard(code: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = code;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.snackBar.open('Enlace Copiado', 'Cerrar', {
      duration: 2000,
      panelClass: "success-dialog"
    });
  }

}
