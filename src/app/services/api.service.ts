import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Team } from '../objects/team';

@Injectable()
export class ApiService {

  constructor(private http: Http) {  }

  url: 'localhost:8080';

  getTeamInfo(teamName: string): Team {
    const team = {
      name: teamName,
      city: 'Columbia',
      state: 'MO'
    };

    return team;
  }

  getHello(): any {
    this.http.get('http://localhost:9790/hello').toPromise().then(res => {
      console.log(res);
      return res.toString();
    }).catch(err => {
      return 'Error';
    });
  }
}
