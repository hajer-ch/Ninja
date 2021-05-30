import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
teams:any;
  constructor( private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        console.log('here data from BE', data.teams);
        this.teams=data.teams;
    
      });
  }

}
