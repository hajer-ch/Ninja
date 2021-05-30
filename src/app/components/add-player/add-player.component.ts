import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
addPlayerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private playerService:PlayerService) { }

  ngOnInit() {
this.addPlayerForm=this.formBuilder.group({
playerName:['',[Validators.maxLength(5), Validators.required]],
position:['',[Validators.maxLength(2), Validators.required]],
age:['',[Validators.maxLength(2), Validators.required]]

}) ;
  }
  addPlayer(player){
    console.log( 'This is the team',player);
    this.playerService.addPlayer(player).subscribe()
  }

}
