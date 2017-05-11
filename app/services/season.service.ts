import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Season }  from './../classes/season.class';
import { Round }  from './../classes/round.class';

@Injectable()
export class SeasonService {
  private seasonUrl: string = 'http://127.0.0.1:8000/api/seasons/';
  private roundUrl: string = 'http://127.0.0.1:8000/api/season/rounds/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getSeasons(): Promise<Season[]> {
    return this.http.get(this.seasonUrl)
               .toPromise()
               .then(response => response.json() as Season[])
               .catch(this.handleError);
  }

  getSeason(id: number): Promise<Season> {
    return this.http.get(`${this.seasonUrl}${id}`)
              .toPromise()
              .then(response => response.json() as Season)
              .catch(this.handleError);
  }

  addRound(roundNumber: number, season: number, series: string): Promise<Round> {
    return this.http
               .post(this.roundUrl, JSON.stringify({round: roundNumber, season: season, series: series}), {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Round)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
