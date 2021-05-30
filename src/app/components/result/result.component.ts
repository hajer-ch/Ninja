import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() matchInput:any; 

today:any;
date:any;

  constructor( private matchService:MatchService) { }

  ngOnInit() {
    
  }
  compare(x,y){
    if (x>y) {
      return 'win';
    } else if (x<y) {
      return 'loss';
    } else {
      return 'draw';
    }
  }
 
played(x,y){
if (x>y) {
  return "played";
}else if (x==y) {
  return "on Going";
}else
return "No";
  }
}

