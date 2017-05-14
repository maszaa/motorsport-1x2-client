import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Player }  from './../classes/player.class';
import { PlayerRow }  from './../classes/player-row.class';
import { PlayerHelper }  from './../classes/player-helper.class';
import { PlayerService }  from './../services/player.service';
import { Round }  from './../classes/round.class';
import { SeasonService }  from './../services/season.service';

@Component({
  selector: 'round',
  templateUrl: './../templates/round.html',
  providers: [PlayerService, SeasonService, PlayerHelper]
})

export class RoundDetailComponent implements OnInit {
  title = 'Round';
  round: Round;
  players: Player[];
  roundPlayers: Player[];
  playerRows: PlayerRow[];

  constructor(private playerHelper: PlayerHelper,
              private playerService: PlayerService,
              private seasonService: SeasonService,
              private route:ActivatedRoute) { }

  getRound(roundId: number): void {
    if (!roundId) {
      return;
    }
    this.seasonService.getRound(roundId).then(round => this.round = round);
  }

  getPlayerRows(competitionId: number, roundId: number, players: Player[]): void {
    if (!competitionId || !roundId || !players) {
      return;
    }
    this.playerService.getPlayerRows(competitionId, roundId)
                      .then(playerRows => {
                        this.players = players;
                        this.playerRows = playerRows;
                        this.playerHelper.orderPlayers(players, playerRows)
                                         .then(roundPlayers => this.roundPlayers = roundPlayers);
                      });
  }

  getPlayers(competitionId: number, roundId: number): void {
    if (!competitionId || !roundId) {
        return;
    }
    this.playerService.getPlayers(competitionId)
                      .then(players => {
                        this.players = players;
                        this.getPlayerRows(competitionId, roundId, this.players);
                      });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.getPlayers(+params['competitionId'], +params['roundId']);
        this.getRound(+params['roundId']);
      });
  }
}
