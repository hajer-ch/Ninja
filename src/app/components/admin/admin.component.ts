import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches: any;
  players: any;
  teams: any;
  id: any;
  constructor(private router: Router,
    private matchService: MatchService,
    private playerService: PlayerService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        console.log('here data from BE', data.matches);
        this.matches = data.matches;
      });

    this.playerService.getAllPlayers().subscribe(
      (data) => {
        console.log('here data from BE', data.players);
        this.players = data.players;

      });
    this.teamService.getAllTeams().subscribe(
      (data) => {
        console.log('here are date from BE,', data.teams);
        this.teams = data.teams;
      }
    )
  }
  infoMatch(x: any) {
    this.router.navigate([`match-info/${x}`]);
  }
  delateMatch(a: any) {
    this.matchService.delateMatch(a).subscribe(
      (data) => {
        console.log('data after delate', data.message);
        this.matchService.getAllMatches().subscribe(
          (data) => {
            console.log('here data from BE', data.matches);
            this.matches = data.matches;
          });
      }
    );
  }
  editMatch(z: any) {
    this.router.navigate([`edit-match/${z}`]);
  }
  infoPlayer(a: any) {
    this.router.navigate([`info-player/${a}`]);
  }
  delatePlayer(b: any) {
    this.playerService.delatePlayer(b).subscribe(
      (data) => {
        console.log('data after delate', data.message);

        this.playerService.getAllPlayers().subscribe(
          (data) => {
            console.log('data from BE after delate', data.players);
            this.players = data.players;
          })
      })
  }
  editPlayer(b: any) {
    this.router.navigate([`edit-player/${b}`]);
  }
  infoTeam(e: any) {
    this.router.navigate([`info-team/${e}`]);
  }
  delateTeam(b: any) {
    this.teamService.deleteTeam(b).subscribe(
      (data)=>{
        console.log('message after delete', data.message);
        this.teamService.getAllTeams().subscribe(
          (data)=>{
            console.log('data after delerte', data.teams);
            this.teams=data.teams
            
          })
        
      })
    
  }
  editTeam(a:any){
    this.router.navigate([`edit-team/${a}`]);
  }
}




