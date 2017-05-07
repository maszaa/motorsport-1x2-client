import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Series }  from './../classes/series.class';

@Injectable()
export class SeriesService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getSeries(): Promise<Series[]> {
    return this.http.get('http://127.0.0.1:8000/api/series/?format=json')
               .toPromise()
               .then(this.handleData)
               .catch(this.handleError);
  }
  private handleData(data: any): Promise<Series[]> {
    let series = new Array();
    Array.of(data.json()).forEach(function(serie) {
      series.push(new Series(serie[0].name));
    });
    return Promise.resolve(series);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
