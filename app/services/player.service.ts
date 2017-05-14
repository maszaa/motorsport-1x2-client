import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Player }  from './../classes/player.class';
import { PlayerRow }  from './../classes/player-row.class';

@Injectable()
export class PlayerService {
  private playerUrl: string = 'http://127.0.0.1:8000/api/players/';
  private playerRowUrl: string = 'http://127.0.0.1:8000/api/player/row/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPlayers(competitionId: number): Promise<Player[]> {
    return this.http.get(`${this.playerUrl}?competitionId=${competitionId}`)
               .toPromise()
               .then(response => response.json() as Player[])
               .catch(this.handleError);
  }

  addPlayer(name: string, competitionId: number): Promise<Player> {
    return this.http
               .post(this.playerUrl, JSON.stringify({name: name, competition: competitionId}), {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Player)
               .catch(this.handleError);
  }

  addPlayerRow(competitionId: number, playerId: string, roundId: number, rowType: string, row: string): Promise<PlayerRow[]> {
    return this.http
               .post(this.playerRowUrl, JSON.stringify({player: playerId, competition: competitionId, round: roundId, rowType: rowType, row: row}), {headers: this.headers})
               .toPromise()
               .then(response => response.json() as PlayerRow)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
