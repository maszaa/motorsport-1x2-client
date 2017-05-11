import { Component, OnInit } from '@angular/core';

import { Competition }  from './../classes/competition.class';
import { CompetitionService }  from './../services/competition.service';

@Component({
  selector: 'competitions',
  templateUrl: './../templates/competitions.html',
  providers: [CompetitionService]
})

export class CompetitionComponent implements OnInit {
  title = 'Competitions';
  competitions: Competition[];

  constructor(private competitionService: CompetitionService) { }

  getCompetitions(): void {
    this.competitionService.getCompetitions().then(competitions => this.competitions = competitions);
  }
  ngOnInit(): void {
    this.getCompetitions();
  }
}
