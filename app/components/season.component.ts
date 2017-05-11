import { Component, OnInit } from '@angular/core';

import { Season }  from './../classes/season.class';
import { SeasonService }  from './../services/season.service';

@Component({
  selector: 'seasons',
  templateUrl: './../templates/seasons.html',
  providers: [SeasonService]
})

export class SeasonComponent implements OnInit {
  title = 'Seasons';
  seasons: Season[];

  constructor(private seasonService: SeasonService) { }

  getSeasons(): void {
    this.seasonService.getSeasons().then(seasons => this.seasons = seasons);
  }
  ngOnInit(): void {
    this.getSeasons();
  }
}
