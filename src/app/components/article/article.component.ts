import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // on doit passer une entrée à ce child
@Input() playerInput:any; //name of the child is articleInput ,
  constructor() { }

  ngOnInit() {
  }

}
