import { Component, OnInit, Input } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  // player: any;
  

  @Input() player: any;

  firstName: String;
  lastName: String;
  elo: Number;

  constructor(    
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private http: Http) { }

  ngOnInit() {    
  }

  // this.firstName = this.playerToEdit.firstName;
  // this.lastName = this.playerToEdit.lastName;
  // this.elo = this.playerToEdit.elo;
  // console.log('123');
  // console.log(this.firstName);


  onAddPlayerSubmit() {
    this.firstName = this.player.firstName;
    this.lastName = this.player.lastName;
    this.elo = this.player.elo;
    console.log(this.player)

    const player = {
      firstName: this.firstName,
      lastName: this.lastName,
      elo: this.elo
    }    
    console.log(this.player);

    if(!this.validateService.validatePlayer(player)) {
      this.flashMessage.show('Не все поля заполнены!', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // this.updatePlayer(player).subscribe(data => {
    //   if (data.success) {
    //     this.flashMessage.show(`${player.firstName} ${player.lastName} обновлен`, {cssClass: 'alert-success', timeout: 5000});
    //   } else {
    //     this.flashMessage.show('Произошла ошибка', {cssClass: 'alert-danger', timeout: 5000});
    //   }
    // }); 
  }

  
}
