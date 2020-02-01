import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PixelFillDirective } from './pixel/pixel-fill.directive';

@NgModule({
  declarations: [
    AppComponent,
    PixelFillDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
