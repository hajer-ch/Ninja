import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogArticles:any;
  constructor() { }

  ngOnInit() {
    this.blogArticles=[
    {id:1, name:"ali",description:"description1"},
    {id:2, name:"salah", description:"description2"},
    {id:1, name:"ali", description:"description3"},
    {id:1, name:"ali", description:"description4"}
  ];
}
}
