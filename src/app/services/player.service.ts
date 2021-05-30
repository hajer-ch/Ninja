import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  addPlayer(player: any) {
    return this.httpClient.post(`${this.playerURL}/addPlayer`, player);
  }
  getAllPlayers() {
    return this.httpClient.get<{message:string, players:any}>(`${this.playerURL}/players`);
  }
  getPlayerById(id:any){
    return this.httpClient.get<{findedPlayer: any}>(`${this.playerURL}/getPlayer/${id}`);
  } 
  delatePlayer(id:any){
return this.httpClient.delete<{message:string}>(`${this.playerURL}/delatePlayerById/${id}`);
  }
}
