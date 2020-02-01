import { Component, OnInit, ViewChildren, QueryList, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { PixelFillDirective } from '../pixel/pixel-fill.directive';

@Component({
  selector: 'pixel-board',
  template: `
    <div class="board" [ngStyle]="{'height.px': PIXEL_SIZE*rows, 'width.px': PIXEL_SIZE*cols}">
      <ng-container *ngFor="let pixelRow of pixelBoard">
          <ng-container *ngFor="let pixel of pixelRow">
              <div class="pixel" [ngStyle]="{'height.px': PIXEL_SIZE, 'width.px': PIXEL_SIZE}" pixelFill></div>
          </ng-container>
      </ng-container>
  </div>

  `,
  styleUrls: ['./pixel-board.component.scss']
})

export class PixelBoardComponent implements OnInit, OnChanges{

  readonly PIXEL_SIZE = 10;

  pixelBoard: Array<Array<any>>;

  @Input() rows: number;
  @Input() cols: number;

  @ViewChildren(PixelFillDirective)
  pixelsRef: QueryList<PixelFillDirective>;

  constructor() { }

  ngOnInit() {
    this.pixelBoard = new Array(this.rows);
    for(let i = 0; i < this.rows; i++){
      this.pixelBoard[i] = new Array(this.cols).fill(0);
    }
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  addColumn(){
    this.pixelBoard.forEach(pixelRow=>{
      pixelRow.push(0);
    })
    console.log(this.pixelBoard)
  }

  addRow(){
    this.pixelBoard.push(new Array(this.cols).fill(0));
  }

  onClearPixel(){
    this.pixelsRef.forEach(pixel=>{
      pixel.clearPixel();
    })
  }

}
