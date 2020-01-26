import { Component } from '@angular/core';
import { PixelService } from './pixel/pixel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  pixels = new Array(4088).fill(0);

  constructor(
    private pixelService: PixelService
  ){}

  onColorChange(event){
    this.pixelService.currentColor = event.target.value;
  }
}
