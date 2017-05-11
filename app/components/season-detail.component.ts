import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Season }  from './../classes/season.class';
import { SeasonService }  from './../services/season.service';

@Component({
  selector: 'season',
  templateUrl: './../templates/season.html',
  providers: [SeasonService]
})

export class SeasonDetailComponent implements OnInit {
  title = 'Season';
  season: Season;

  constructor(private seasonService: SeasonService, private route:ActivatedRoute) { }

  getSeason(id: number): void {
    this.seasonService.getSeason(id).then(season => this.season = season);
  }

  addRound(roundNumber: number, season: number, series: string): void {
    if (!roundNumber || !season || !series) {
      return;
    }
    this.seasonService.addRound(roundNumber, season, series)
                      .then(round => this.season.rounds.push(`${round.roundNumber}. ${round.roundName}`));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.getSeason(+params['id']);
      });
  }
}
