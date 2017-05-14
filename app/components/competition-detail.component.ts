import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Competition }  from './../classes/competition.class';
import { CompetitionService }  from './../services/competition.service';
import { Player }  from './../classes/player.class';
import { PlayerService }  from './../services/player.service';
import { PlayerRow }  from './../classes/player-row.class';
import { Round }  from './../classes/round.class';
import { SeasonService }  from './../services/season.service';

@Component({
  selector: 'competition',
  templateUrl: './../templates/competition.html',
  providers: [CompetitionService, PlayerService, SeasonService]
})

export class CompetitionDetailComponent implements OnInit {
  title = 'Competition';
  competition: Competition;
  newPlayer: Player;
  players: Player[];
  rounds: Round[];
  newPlayerRow: PlayerRow;

  constructor(private competitionService: CompetitionService,
              private playerService: PlayerService,
              private seasonService: SeasonService,
              private route:ActivatedRoute) { }

  getRounds(season: number): void {
    if (!season) {
      return;
    }
    this.seasonService.getRounds(season)
                      .then(rounds => this.rounds = rounds)
  }

  getCompetition(id: number): void {
    if (!id) {
      return;
    }
    this.competitionService.getCompetition(id).then(competition => {
                                                      this.competition = competition;
                                                      this.getRounds(this.competition.season.id);
                                                    });
  }

  getPlayers(competitionId: number): void {
    if (!competitionId) {
      return;
    }
    this.playerService.getPlayers(competitionId).then(players => this.players = players);
  }

  addPlayer(name: string, competitionId: number): void {
    if (!name || !competitionId) {
      return;
    }
    this.playerService.addPlayer(name, competitionId)
                           .then(newPlayer => {
                              this.newPlayer = newPlayer
                              this.players.push(this.newPlayer);
                            });
  }

  addPlayerRow(competitionId: number, playerId: string, roundId: number, rowType: string, row: string): void {
    if (!competitionId || !playerId || !roundId || !rowType || !row) {
      return;
    }
    this.playerService.addPlayerRow(competitionId, playerId, roundId, rowType, row)
                           .then(newPlayerRow => this.newPlayerRow = newPlayerRow);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        let id = +params['id'];
        this.getCompetition(id);
        this.getPlayers(id);
      });
  }
}
