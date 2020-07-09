import { Component, OnInit, ViewChild } from '@angular/core';

import { PixelService } from './pixel/pixel.service';
import { PixelBoardComponent } from './pixel-board/pixel-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cols = 40;
  rows = 40;

  @ViewChild(PixelBoardComponent, {static: false})
  pixelBoard: PixelBoardComponent;

  ngOnInit(){
  }

  constructor(
    private pixelService: PixelService
  ){}

  addCol(){
    this.cols += 1;
    this.pixelBoard.addColumn();
  }

  addRow(){
    this.rows += 1;
    this.pixelBoard.addRow();
  }

  onClearBoard(){
    this.pixelBoard.clearPixels();
  }

  onColorChange(event){
    this.pixelService.currentColor = event.target.value;
  }

}
