import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { WorldCupEventComponent } from './components/world-cup-event/world-cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { ScoresComponent } from './components/scores/scores.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './match-info/match-info.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';

import { TeamInfoComponent } from './components/team-info/team-info.component';
import { InfoPlayerComponent } from './components/info-player/info-player.component';
import { TeamArticleComponent } from './components/team-article/team-article.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ComingMatchesComponent } from './components/coming-matches/coming-matches.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { AfterHeaderComponent } from './components/after-header/after-header.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AddMatchComponent,
    WorldCupEventComponent,
    ResultComponent,
    NewsComponent,
    ScoresComponent,
    VideosComponent,
    BlogComponent,
    ArticleComponent,
    BlogArticleComponent,
    MatchInfoComponent,
    SearchComponent,
    TeamInfoComponent,
    InfoPlayerComponent,
    TeamArticleComponent,
    MatchesComponent,
    ComingMatchesComponent,
    NextMatchComponent,
    AfterHeaderComponent,
    BlogPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,// import
    ReactiveFormsModule,// import
    HttpClientModule,
    AppRoutingModule,
    // NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
