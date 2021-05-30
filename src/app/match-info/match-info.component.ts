import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../services/match.service';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
idMatch:any;
title:any;
match:any;

  constructor(private activatedRoute:ActivatedRoute,
    private matchService:MatchService, 
    ) { }

  ngOnInit() {
    this.idMatch= 
    this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.idMatch).subscribe(
      (data)=>{
        console.log('here finded object by id', data.findedMatch);
        this.match = data.findedMatch;
        
      });
  }

}
