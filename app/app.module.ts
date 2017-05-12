import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRouter }  from './app.router';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { SeriesComponent }  from './components/series.component';
import { SeriesService }  from './services/series.service';
import { SeasonComponent }  from './components/season.component';
import { SeasonDetailComponent }  from './components/season-detail.component';
import { SeasonService }  from './services/season.service';
import { CompetitionComponent }  from './components/competition.component';
import { CompetitionDetailComponent }  from './components/competition-detail.component';
import { CompetitionService }  from './services/competition.service';
import { PlayerComponent }  from './components/player.component';
import { PlayerService }  from './services/player.service';
import { RoundComponent }  from './components/round.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRouter
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    SeasonComponent,
    SeasonDetailComponent,
    CompetitionComponent,
    CompetitionDetailComponent,
    PlayerComponent,
    RoundComponent,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
