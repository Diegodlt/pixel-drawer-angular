import { Directive, HostListener, ElementRef } from '@angular/core';
import { PixelService } from './pixel.service';

@Directive({ selector: '[pixelFill]' })

export class PixelFillDirective {

    constructor(
        private elRef: ElementRef,
        private pixelService: PixelService
    ) { }

    @HostListener('mouseenter') onHover(){
        if(this.pixelService.clicked){
            this.elRef.nativeElement.style['background-color'] = this.pixelService.currentColor;
        }
    }
    
    @HostListener('mousedown') onMouseDown(){
        this.elRef.nativeElement.style['background-color'] = this.pixelService.currentColor;
        this.pixelService.clicked = true;
    }

    @HostListener('mouseup') onMouseUp(){
        this.pixelService.clicked = false;
    }

    clearPixel(){
        this.elRef.nativeElement.style['background-color'] = "#fff";
    }

}