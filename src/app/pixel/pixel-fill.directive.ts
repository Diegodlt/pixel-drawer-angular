import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({ selector: '[pixelFill]' })

export class PixelFillDirective {

    constructor(
        private elRef: ElementRef
    ) { }

    @HostListener('mouseenter', ['$event']) onHover(event){
            this.elRef.nativeElement.style['background-color'] = 'blue';
    }
}