import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  Matches:any;
  findedMatch:any;
  findedNextMatch:any
  laterMatch:any
  constructor( private matchService:MatchService ) { }
  
  ngOnInit() {
    this.matchService.getMatchByDate().subscribe((data)=>{
      console.log('searched from BE', data.findedMatch);
      this.findedMatch= data.findedMatch;
    })
    this.matchService.getNextMatch().subscribe((data)=>{
      console.log('finded next match', data.findedNextMatch);
      this.findedNextMatch=data.findedNextMatch;
      
    })
    this.matchService.getLaterMatches().subscribe((data)=>{
      console.log('finded next match', data.laterMatch);
      this.laterMatch=data.laterMatch;
      
    })
  }

}
