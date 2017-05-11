import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Season }  from './../classes/season.class';
import { SeasonService }  from './../services/season.service';

@Component({
  selector: 'season',
  templateUrl: './../templates/season.html',
  providers: [SeasonService]
})

export class SeasonDetailComponent implements OnInit {
  title = 'Season';
  season: Season;

  constructor(private seasonService: SeasonService, private route:ActivatedRoute) { }

  getSeason(id: number): void {
    this.seasonService.getSeason(id).then(season => this.season = season);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.getSeason(+params['id']);
      });
  }
}
