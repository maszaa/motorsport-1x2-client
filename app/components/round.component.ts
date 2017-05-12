import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Round }  from './../classes/round.class';
import { SeasonService }  from './../services/season.service';

@Component({
  selector: 'rounds',
  templateUrl: './../templates/rounds.html',
  providers: [SeasonService]
})

export class RoundComponent implements OnInit {
  title = 'Rounds';
  rounds: Round[];
  competitionId: number;

  constructor(private seasonService: SeasonService, private route:ActivatedRoute) { }

  getRounds(season: number): void {
    if (!season) {
      return;
    }
    this.seasonService.getRounds(season)
                      .then(rounds => this.rounds = rounds)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.competitionId = +params['competitionId'];
        this.getRounds(+params['seasonId']);
      });
  }
}
