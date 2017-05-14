import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Player }  from './../classes/player.class';
import { PlayerService }  from './../services/player.service';

@Component({
  selector: 'players',
  templateUrl: './../templates/players.html',
  providers: [PlayerService]
})

export class PlayerComponent implements OnInit {
  title = 'Players';
  players: Player[];

  constructor(private playerService: PlayerService, private route:ActivatedRoute) { }

  getPlayers(competitionId: number): void {
    if (!competitionId) {
        return;
    }
    this.playerService.getPlayers(competitionId).then(players => this.players = players);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.getPlayers(+params['id']);
      });
  }
}
