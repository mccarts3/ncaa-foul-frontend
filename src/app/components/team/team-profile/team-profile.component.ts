import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  teamName: string;

  constructor(private api: ApiService,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.setTeamName(this.route.snapshot.params.teamname);
    this.testApi('mccarts3');
  }

  setTeamName(routeParam: string): void {
    const team = this.api.getTeamInfo(routeParam);
    this.teamName = team.name;
  }

  testApi(username: string): void {
    let obj = {};

    this.api.getUserInfoTest(username).then(retVal => {
      // console.log(retVal._body);
      obj = retVal;
    });
  }
}
