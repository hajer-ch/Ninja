import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm:FormGroup;
  match:any={};
  id:any;
  msg:any;
  title:string
  // to declare the name/id of the form
  constructor(private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private matchService:MatchService,// construct the  the private constructor(formBuilder is a variable) of form inputs we use FormBuilder constructor to construct it 
    private router:Router) { }

  ngOnInit() { //auto execution
    this.id=
    this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id){
      this.title='Edit';
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        this.match=data.findedMatch;
      }
    )
    }else{
      this.title="Add";
    }
    this.addMatchForm=this.formBuilder.group({
    teamOne:[''],
    teamTwo:[''],
    scoreOne:[''],
    scoreTwo:[''],
    category:[''],
    scheduledAt:[''],
    status:[''],
    });
  }
  // when we do the click
  addOrEdittMatch(x){
    if(this.id){
      //edit match
      this.matchService.updateMatch(this.match).subscribe(
        (data)=> {
          if (data.message == '0') {
            this.msg = "Email exists";
            // document.getElementById('msgError').innerHTML = "";
            // document.getElementById('msgError').style.color = "red";
          } else {
            this.router.navigate(['admin']);
          }
         } );
    }else{    
      // add match
      this.matchService.addMatch(this.match).subscribe();
      this.router.navigate(['admin']);
    }
  }

}
