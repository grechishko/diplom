import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TournamentsService {
  tournamentToDisplayId: Number = 0;
  tournamentToDisplay: any = {};

  constructor(private http: Http) { }


  getList() {
    let headers = new Headers();
    // this.loadToken();
    // headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('tournaments/list', {headers: headers})
      .map(res => res.json());
  }

  getTournamentById(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`tournaments/${id}`, {headers: headers})
    .map(res => res.json());
  }

}
