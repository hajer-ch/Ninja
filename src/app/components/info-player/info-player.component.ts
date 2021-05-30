import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.css']
})
export class InfoPlayerComponent implements OnInit {
  idPlayer:any;
  player:any;
  players:{};
  constructor( private playerService:PlayerService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.idPlayer= 
    this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.idPlayer).subscribe(
      (data)=>{
        console.log('here finded object by id', data.findedPlayer);
        this.player = data.findedPlayer;
        
      });
  }

}
