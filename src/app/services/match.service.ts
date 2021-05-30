import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchURL = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }
  addMatch(match:any){
    return this.httpClient.post(`${this.matchURL}/addMatch`, match);
  }
  getAllMatches(){
    return this.httpClient.get<{message:string, matches:any}>(`${this.matchURL}/matches`);
  }
  getMatchById(id:any){
    return this.httpClient.get<{findedMatch: any}>(`${this.matchURL}/getMatch/${id}`);
  }  
  getMatchByDate(){
    return this.httpClient.get<{findedMatch: any}>(`${this.matchURL}/getMatchByDate`);
  } 
  getNextMatch(){
    return this.httpClient.get<{findedNextMatch:any}>(`${this.matchURL}/getNextMatch`);
  }
updateMatch(match:any){
    return this.httpClient.put<{message:string}>(`${this.matchURL}/updateMatch/${match._id}`,match);
  }
delateMatch(id:any){
  return this.httpClient.delete<{message: string}>(`${this.matchURL}/deleteById/${id}`);
}

searchByTeamOne(match){
  return this.httpClient.post<{searchedMatches:any}>(`${this.matchURL}/searchMatch`,match);
}
getLaterMatches(){
  return this.httpClient.get<{ laterMatch:any}>(`${this.matchURL}/laterMatches`);
}
}