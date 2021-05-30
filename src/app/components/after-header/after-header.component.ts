import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-after-header',
  templateUrl: './after-header.component.html',
  styleUrls: ['./after-header.component.css']
})
export class AfterHeaderComponent implements OnInit {
  @Input() title: any;
  

  constructor(private router: Router,
   private route:ActivatedRoute) { }

  ngOnInit() {

  }}
