import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './components/home.component';
import { SeriesComponent }  from './components/series.component';
import { SeasonComponent }  from './components/season.component';
import { SeasonDetailComponent }  from './components/season-detail.component';
import { CompetitionComponent }  from './components/competition.component';
import { CompetitionDetailComponent }  from './components/competition-detail.component';
import { PlayerComponent }  from './components/player.component';
import { RoundComponent }  from './components/round.component';
import { RoundDetailComponent }  from './components/round-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'seasons', component: SeasonComponent },
  { path: 'season/:id', component: SeasonDetailComponent},
  { path: 'competition/:competitionId/season/:seasonId/rounds', component: RoundComponent},
  { path: 'competition/:competitionId/season/:seasonId/round/:roundId', component: RoundDetailComponent},
  { path: 'competition/:id', component: CompetitionDetailComponent },
  { path: 'competitions', component: CompetitionComponent },
  { path: 'competition/:id/players', component: PlayerComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouter {}
