import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Competition }  from './../classes/competition.class';
import { CompetitionService }  from './../services/competition.service';
import { Player }  from './../classes/player.class';
import { PlayerService }  from './../services/player.service';

@Component({
  selector: 'competition',
  templateUrl: './../templates/competition.html',
  providers: [CompetitionService, PlayerService]
})

export class CompetitionDetailComponent implements OnInit {
  title = 'Competition';
  competition: Competition;
  newPlayer: Player;

  constructor(private competitionService: CompetitionService,
              private playerService: PlayerService,
              private route:ActivatedRoute) { }

  getCompetition(id: number): void {
    this.competitionService.getCompetition(id).then(competition => this.competition = competition);
  }

  addPlayer(name: string, competitionId: number): void {
    if (!name || !competitionId) {
      return;
    }
    this.playerService.addPlayer(name, competitionId)
                           .then(newPlayer => this.newPlayer = newPlayer)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.getCompetition(+params['id']);
      });
  }
}
