import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { SeriesComponent }  from './components/series.component';
import { SeriesService }  from './services/series.service';
import { SeasonComponent }  from './components/season.component';
import { SeasonService }  from './services/season.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'series',
        component: SeriesComponent
      },
      {
        path: 'seasons',
        component: SeasonComponent
      },
    ])],
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    SeasonComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    SeriesService,
    SeasonService,
  ]
})
export class AppModule {}
