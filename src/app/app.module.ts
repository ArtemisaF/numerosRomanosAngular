import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyRomanosComponent } from './my-romanos/my-romanos.component';

@NgModule({
  declarations: [
    AppComponent,
    MyRomanosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
