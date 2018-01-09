import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Team } from '../objects/team';

@Injectable()
export class ApiService {
  constructor(private http: Http) {  }

  getTeamInfo(teamName: string): Team {
    const team = {
      name: teamName,
      city: 'Columbia',
      state: 'MO'
    };

    return team;
  }

  getUserInfoTest(username: string): Promise<Object> {
    return this.http.get('https://api.github.com/users/' + username).toPromise();
  }
}
