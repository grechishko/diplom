import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersList: any;

  playerToEdit: any = {
    firstName: '',
    lastName: '',
    elo: 0,
  };

  constructor(
    private playersService:PlayersService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.playersService.getPlayersList().subscribe(x => {
      this.playersList = x;
    },
     err => {
       console.log(err);
       return false;
     });
  }

  editPlayer(player) {
    this.playerToEdit._id = player._id;
    this.playerToEdit.firstName = player.firstName;
    this.playerToEdit.lastName = player.lastName;
    this.playerToEdit.elo = player.elo;
  }

  deletePlayer(id) {
    this.playersService.deletePlayer(id).subscribe(err => {
      console.log(err);
      return false;
    });
  }

  onEditPlayerSubmit() {
    if(!this.validateService.validatePlayer(this.playerToEdit)) {      
      this.flashMessage.show('Не все поля заполнены!', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    this.playersService.updatePlayer(this.playerToEdit).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(`${this.playerToEdit.firstName} ${this.playerToEdit.lastName} обновлен`, {cssClass: 'alert-success', timeout: 5000});
      } else {
          this.flashMessage.show('Произошла ошибка', {cssClass: 'alert-danger', timeout: 3000});
        }
      this.ngOnInit();
    });
  }
}
