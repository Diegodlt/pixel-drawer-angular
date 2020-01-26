import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PixelService {

    private _clicked = false;
    currentColor = '';

    constructor() { }

    get clicked(){
        return this._clicked;
    }

    set clicked(value: boolean){
        this._clicked = value
    }

}