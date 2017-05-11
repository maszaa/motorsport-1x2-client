import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Competition }  from './../classes/competition.class';
import { CompetitionService }  from './../services/competition.service';

@Component({
  selector: 'competition',
  templateUrl: './../templates/competition.html',
  providers: [CompetitionService]
})

export class CompetitionDetailComponent implements OnInit {
  title = 'Competition';
  competition: Competition;

  constructor(private competitionService: CompetitionService, private route:ActivatedRoute) { }

  getCompetition(id: number): void {
    this.competitionService.getCompetition(id).then(competition => this.competition = competition);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.getCompetition(+params['id']);
      });
  }
}
