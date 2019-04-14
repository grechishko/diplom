import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {

  constructor(private http: Http) { }

  getPlayersList() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('players/list', {headers: headers})
      .map(res => res.json());
  }

  deletePlayer(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`players/${id}`, {headers: headers})
      .map(res => res.json());
  }

  updatePlayer(player) {
    console.log('upPlayer', player);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`players/edit/${player.id}`, player, {headers: headers})
      .map(res => res.json());
  }

}
