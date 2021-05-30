import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  msg:string;
  constructor(private fb:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.signUpForm=this.fb.group({
      fullName:['', [Validators.maxLength(15),Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.maxLength(25),Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPwd:[''],
      address:['', [Validators.maxLength(15),Validators.required]],
      tel:['', [Validators.maxLength(15),Validators.required]]
    },
    {
      validator: MustMatch('password','confirmPwd')
    }
    );
  }
  signup(obj:any){
    console.log('here my object', obj);
    this.userService.signup(obj).subscribe(
      (data)=> {
        if (data.message == '0') {
          this.msg = "Email exists";
          // document.getElementById('msgError').innerHTML = "";
          // document.getElementById('msgError').style.color = "red";
        } else {
          this.router.navigate(['']);
        }
        console.log('Data after ', data.message); 
      }
    );
  }

}
