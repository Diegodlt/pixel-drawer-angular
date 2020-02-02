import { Component,  ViewChildren, QueryList, OnInit } from '@angular/core';
import { PixelService } from './pixel/pixel.service';
import { PixelFillDirective } from './pixel/pixel-fill.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cols = 50;
  rows = 50;

  ngOnInit(){
  }

  constructor(
    private pixelService: PixelService
  ){}

  addCol(){
    this.cols += 1;
  }

  addRow(){
    this.rows += 1;
  }

  onClearPixel(){

  }

  onColorChange(event){
    this.pixelService.currentColor = event.target.value;
  }

}
