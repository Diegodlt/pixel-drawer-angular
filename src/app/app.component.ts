import { Component,  ViewChildren, QueryList } from '@angular/core';
import { PixelService } from './pixel/pixel.service';
import { PixelComponent } from './pixel/pixel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  pixels = new Array(4088).fill(0);

  @ViewChildren(PixelComponent)
  pixelsRef: QueryList<PixelComponent>;

  constructor(
    private pixelService: PixelService
  ){}

  onClearPixel(){
    this.pixelsRef.forEach(el=>{
      el.clearPixel();
    })
  }

  onColorChange(event){
    this.pixelService.currentColor = event.target.value;
  }

}
