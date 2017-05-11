import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Seasons }  from './../classes/season.class';

@Injectable()
export class SeasonService {
  private url: string = 'http://127.0.0.1:8000/api/seasons/';

  constructor(private http: Http) { }

  getSeasons(): Promise<Season[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as Season[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
