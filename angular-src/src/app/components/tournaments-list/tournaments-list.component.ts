import { Component, OnInit, Output } from '@angular/core';
import { TournamentsService } from '../../services/tournaments.service';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {
  // list: Object[];
  list: any;

  id: Number = 0;


  constructor(private tournamentsService:TournamentsService) { }

  ngOnInit() {

    this.tournamentsService.getList().subscribe(x => {
      this.list = x;
    },
     err => {
       console.log(err);
       return false;
     });

  }

  setId(tournament){
    console.log(tournament);
    this.tournamentsService.tournamentToDisplay = tournament;
    // console.log(this.id);
  }

  setTournamentToDisplay(tournament) {
    console.log(tournament);
    this.tournamentsService.tournamentToDisplay = tournament;
  }

}
