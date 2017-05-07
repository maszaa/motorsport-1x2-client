import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { Home }  from './components/home.component';
import { Seriess }  from './components/series.component';
import { SeriesService }  from './services/series.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'series',
        component: Seriess
      }
    ])],
  declarations: [
                AppComponent,
                Home,
                Seriess
                ],
  bootstrap: [AppComponent],
  providers: [SeriesService]

})
export class AppModule {}
