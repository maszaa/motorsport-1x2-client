import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Competition }  from './../classes/competition.class';

@Injectable()
export class CompetitionService {
  private url: string = 'http://127.0.0.1:8000/api/competitions/?format=json';

  constructor(private http: Http) { }

  getCompetitions(): Promise<Competition[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as Competition[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
