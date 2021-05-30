import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL= 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  addTeam(team:any){
    return this.httpClient.post(`${this.teamURL}/addTeam`, team);
    
  }
  getAllTeams(){
    return this.httpClient.get<{message: string, teams: any}>(`${this.teamURL}/teams`);
  }
  getTeamById(id:any){
    return this.httpClient.get<{findedTeam: any}>(`${this.teamURL}/getTeam/${id}`);
  } 
  deleteTeam(id:any){
    return this.httpClient.delete<{message:string}>(`${this.teamURL}/deleteTeamById/${id}`);
  }
  updateTeam(team:any){
 return this.httpClient.put<{message:string}>(`${this.teamURL}/updateTeam/${team._id}`,team);
  }
}