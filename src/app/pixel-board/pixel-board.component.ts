import { Component, OnInit, ViewChildren, QueryList, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { PixelFillDirective } from '../pixel/pixel-fill.directive';

@Component({
  selector: 'pixel-board',
  template: `
    <ng-container *ngFor="let pixelRow of pixelBoard; index as i">
        <ng-container *ngFor="let pixel of pixelRow">
            <div class="pixel" pixelFill></div>
        </ng-container>
    </ng-container>

  `,
  styleUrls: ['./pixel-board.component.scss']
})
export class PixelBoardComponent implements OnInit, OnChanges{

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
