import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Player }  from './../classes/player.class';

@Injectable()
export class PlayerService {
  private url: string = 'http://127.0.0.1:8000/api/players/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPlayers(competitionId: number): Promise<Player[]> {
    return this.http.get(`${this.url}?competitionId=${competitionId}`)
               .toPromise()
               .then(response => response.json() as Player[])
               .catch(this.handleError);
  }

  addPlayer(name: string, competitionId: number): Promise<Player> {
    return this.http
               .post(this.url, JSON.stringify({name: name, competition: competitionId}), {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Player)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
