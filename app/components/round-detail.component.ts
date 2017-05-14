import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Player }  from './../classes/player.class';
import { PlayerRow }  from './../classes/player-row.class';
import { PlayerService }  from './../services/player.service';
import { Round }  from './../classes/round.class';
import { SeasonService }  from './../services/season.service';

@Component({
  selector: 'round',
  templateUrl: './../templates/round.html',
  providers: [PlayerService, SeasonService]
})

export class RoundDetailComponent implements OnInit {
  title = 'Round';
  round: Round;
  players: Player[];
  roundPlayers: Player[];
  playerRows: PlayerRow[];

  constructor(private playerService: PlayerService,
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
                        this.playerRows = playerRows;
                        let roundPlayers: Player[] = new Array();
                        for (let playerRow of this.playerRows) {
                          let player = roundPlayers.find(player => player.id === playerRow.player)
                          if (!player) {
                            let player = players.find(player => player.id === playerRow.player);
                            if (playerRow.rowType == 'Qualifying') {
                              let roundPlayer: Player = {
                                id: player.id,
                                name: player.name,
                                points: playerRow.pointsFromRow,
                                qualifyingPoints: playerRow.pointsFromRow,
                                racePoints: 0,
                                competitionId: playerRow.competition,
                                rows: new Array()};
                              roundPlayers.push(roundPlayer);
                            }
                            else if (playerRow.rowType == 'Race') {
                              let roundPlayer: Player = {
                                id: player.id,
                                name: player.name,
                                points: playerRow.pointsFromRow,
                                qualifyingPoints: 0,
                                racePoints: playerRow.pointsFromRow,
                                competitionId: playerRow.competition,
                                rows: new Array()};
                              roundPlayers.push(roundPlayer);
                            }
                          }
                          else {
                            player.points += playerRow.pointsFromRow;
                            if (playerRow.rowType == 'Qualifying') {
                              player.qualifyingPoints = playerRow.pointsFromRow;
                            }
                            else if (playerRow.rowType == 'Race') {
                              player.racePoints = playerRow.pointsFromRow;
                            }
                          }

                        }
                        this.roundPlayers = roundPlayers.sort((a, b) => {
                          if (a.points > b.points) {
                            return -1;
                          }
                          else if (a.points < b.points) {
                            return 1;
                          }
                          else {
                            if (a.racePoints > b.racePoints) {
                              return -1;
                            }
                            else if (a.racePoints < b.racePoints) {
                              return 1;
                            }
                            else {
                              if (a.name > b.name) {
                                return 1;
                              }
                              else if (a.name < b.name) {
                                return -1;
                              }
                            }
                          }
                        });
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
