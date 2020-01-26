import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PixelComponent } from './pixel/pixel.component';
import { PixelFillDirective } from './pixel/pixel-fill.directive';

@NgModule({
  declarations: [
    AppComponent,
    PixelComponent,
    PixelFillDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
