import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  hello='Crococoder';
  players:any;
@Input() playerInput:any; 
  constructor( private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        console.log('here data from BE', data.players);
        this.players=data.players;
    
      });
  }

}
