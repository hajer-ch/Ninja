import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:any={};
  constructor(private formBuilder:FormBuilder,
    private userService:UserService) {}
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    console.log('Here my user',this.user);
    this.userService.login(this.user).subscribe();
  }
}
