import { Component,  ViewChildren, QueryList, OnInit } from '@angular/core';
import { PixelService } from './pixel/pixel.service';
import { PixelFillDirective } from './pixel/pixel-fill.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(){
  }

  constructor(
    private pixelService: PixelService
  ){}

  onColorChange(event){
    this.pixelService.currentColor = event.target.value;
  }

}
