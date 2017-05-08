import { Component, OnInit } from '@angular/core';

import { Series }  from './../classes/series.class';
import { SeriesService }  from './../services/series.service';

@Component({
  selector: 'series',
  templateUrl: './../templates/series.html',
  providers: [SeriesService]
})

export class SeriesComponent implements OnInit {
  title = 'Series';
  series: Series[];

  constructor(private seriesService: SeriesService) { }
  
  getSeries(): void {
    this.seriesService.getSeries().then(series => this.series = series);
  }
  ngOnInit(): void {
    this.getSeries();
  }
}
