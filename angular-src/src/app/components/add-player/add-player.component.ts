import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  firstName: String;
  lastName: String;
  elo: Number;

  constructor(    
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private http: Http) { }

  ngOnInit() {
  }

  onAddPlayerSubmit() {
    const player = {
      firstName: this.firstName,
      lastName: this.lastName,
      elo: this.elo
    }

    if(!this.validateService.validatePlayer(player)) {
      this.flashMessage.show('Не все поля заполнены!', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // this.authService.registerUser(user).subscribe(data => {
    //   if(data.success) {
    //     this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
    //     this.router.navigate(['/login']);
    //   } else {
    //     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
    //     this.router.navigate(['/register']);
    //   }
    // });

    this.addPlayer(player).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(`${player.firstName} ${player.lastName} добавлен в базу`, {cssClass: 'alert-success', timeout: 5000});
      } else {
        this.flashMessage.show('Произошла ошибка', {cssClass: 'alert-danger', timeout: 5000});
      }
    });

    

  }


  addPlayer(player) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('players/add', player, {headers: headers})
      .map(res => res.json());
  }
}
