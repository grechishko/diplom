import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PlayersService } from '../../services/players.service';
import { Http, Headers } from '@angular/http';
import { Options } from 'selenium-webdriver';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  name: String;
  type: Number;

  opt: Number;

  // options = {};

  playersList;
  participants = [];

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private playersService:PlayersService) { }

  ngOnInit() {
    this.playersService.getPlayersList().subscribe(x => {
      this.playersList = x;
    },
     err => {
       console.log(err);
       return false;
     });
  }

  onAddTournamentSubmit() {
    const tournament = {
      name: this.name,
      type: this.type,
      options: this.opt,
      participants: this.participants
    }
      


    if(!this.validateService.validateTournament(tournament)) {
      this.flashMessage.show('Не все поля заполнены!', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.addTournament(tournament).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(`${tournament.name} добавлен в базу`, {cssClass: 'alert-success', timeout: 5000});
      } else {
        this.flashMessage.show('Произошла ошибка', {cssClass: 'alert-danger', timeout: 5000});
      }
    });

    console.log(this.participants);
  }

  addTournament(tournament) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('tournaments/add ', tournament, {headers: headers})
        .map(res => res.json());
  }

  removeFromParticipants(player) {
    this.participants.splice(this.participants.indexOf(player), 1);
  }

  togglePlayer(player) {
    const index = this.participants.indexOf(player);    
    if (index == -1) {
      this.participants.push(player)
    } 
    // else {
    //   this.participants.splice(index, 1);
    // }
  }

}
