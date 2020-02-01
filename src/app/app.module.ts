import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PixelFillDirective } from './pixel/pixel-fill.directive';
import { PixelBoardComponent } from './pixel-board/pixel-board.component';

@NgModule({
  declarations: [
    AppComponent,
    PixelFillDirective,
    PixelBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
