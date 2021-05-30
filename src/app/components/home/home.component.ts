import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
findedMatch:any;
x:any;
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getMatchByDate().subscribe((data)=>{
      console.log('searched from BE', data.findedMatch);
      this.findedMatch= data.findedMatch;
    })
    // this.x = {teamOne: "SEV", teamTwo:"ATM", scoreOne: 2, scoreTwo: 4};
  }
 
}
