import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { HomeComponent } from './components/home/home.component';
import { InfoPlayerComponent } from './components/info-player/info-player.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { MatchInfoComponent } from './match-info/match-info.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'matches', component:MatchesComponent},
  {path:'blog', component:BlogPostComponent},
  {path:'signup', component:SignupComponent},
  {path:'signupAdmin', component:SignupComponent},
  {path:'add-player', component:AddPlayerComponent},
  {path: 'info-player/:id', component:InfoPlayerComponent},
  {path:'add-team', component:AddTeamComponent},
  {path: 'edit-team/:id', component:AddTeamComponent},
  {path: 'info-team/:id', component:TeamInfoComponent},
  {path:'admin', component:AdminComponent},
  {path:'add-match', component:AddMatchComponent},
  {path:'match-info/:id', component:MatchInfoComponent},
  {path: 'edit-match/:id', component:AddMatchComponent},
  {path: 'search', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
