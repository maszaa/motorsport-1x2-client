import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Series }  from './../classes/series.class';

@Injectable()
export class SeriesService {
  private url: string = 'http://127.0.0.1:8000/api/series/';

  constructor(private http: Http) { }

  getSeries(): Promise<Series[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as Series[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
