import { Component, OnInit } from '@angular/core';
import { TournamentsService } from '../../services/tournaments.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  id: Number;
  tournament: any;

  constructor(private tournamentsService:TournamentsService) { }

  ngOnInit() {
    this.tournament = this.tournamentsService.tournamentToDisplay;
  }

}
