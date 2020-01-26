import { Component, OnInit, Input, ChangeDetectionStrategy, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pixel',
    template: `
        <div pixelFill></div>
    `,
    styles: [`
        div {
            border: 1px solid black;
            display: inline-block;
            width: 10px;
            height: 10px;
            float: left;
            border-color: rgba( 160, 160, 255, 0.4);
        }
    
    `]
})

export class PixelComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}