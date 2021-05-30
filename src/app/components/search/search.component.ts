import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchForm:FormGroup;
  findedMatches:any;
  constructor(private fb:FormBuilder,
    private matchService:MatchService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      team:['']
    })
  }
search(x){
  console.log('here team one value', x);
this.matchService.searchByTeamOne(x).subscribe((data)=>{
  console.log('searched from BE', data.searchedMatches);
  this.findedMatches= data.searchedMatches;
})
}
}
