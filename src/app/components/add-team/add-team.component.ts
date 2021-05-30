import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  id: any;
  team :any= {};
  title: string;
  addTeamForm: FormGroup;
  // team:any={};
  constructor(private formBuilder: FormBuilder,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() { //auto execution
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Edit';
      this.teamService.getTeamById(this.id).subscribe(
        (data)=>{
          this.team =data.findedTeam;
        }
      )
    } else {
      this.title = 'Add';
    }

    this.addTeamForm = this.formBuilder.group({
      teamName: [''],
      foundation: [''],
      country: [''],
      staduim: ['']
    });
  }
  // when we do the click
  addTeamOrEdit(x) {
    if (this.id) {
      this.teamService.updateTeam(this.team).subscribe()

    } else {
      this.teamService.addTeam(this.team).subscribe();
    }
  }

}