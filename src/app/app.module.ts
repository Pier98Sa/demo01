import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    Box1Component,
    Box2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  


}
