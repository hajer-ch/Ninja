import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-article',
  templateUrl: './team-article.component.html',
  styleUrls: ['./team-article.component.css']
})
export class TeamArticleComponent implements OnInit {
@Input() teamInput :any;
  constructor() { }

  ngOnInit() {
  }

}
