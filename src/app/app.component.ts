import { Component, OnInit, ViewChild } from '@angular/core';

import { PixelService } from './pixel/pixel.service';
import { PixelBoardComponent } from './pixel-board/pixel-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(PixelBoardComponent, {static: false})
  pixelBoard: PixelBoardComponent;

  ngOnInit(){
  }

  constructor(
    private pixelService: PixelService
  ){}

  addCol(){
    this.pixelBoard.addColumn();
  }

  addRow(){
    this.pixelBoard.addRow();
  }

  onClearBoard(){
    this.pixelBoard.clearPixels();
  }

  onColorChange(event){
    this.pixelService.currentColor = event.target.value;
  }

}
