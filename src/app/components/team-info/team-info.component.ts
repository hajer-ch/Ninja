import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  idTeam:any;
  team:any;
  constructor( private teamService:TeamService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.idTeam= 
    this.activatedRoute.snapshot.paramMap.get('id');
    this.teamService.getTeamById(this.idTeam).subscribe(
      (data)=>{
        console.log('here finded object by id', data.findedTeam);
        this.team = data.findedTeam;
        
      });
  }
  }


