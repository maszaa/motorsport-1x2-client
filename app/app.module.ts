import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Home }  from './home.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  Home
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
