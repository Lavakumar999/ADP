import { Component, OnInit } from '@angular/core';

import{FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class LoginComponent implements OnInit {
  
  LoginForm:FormGroup;
  submitted=false;
  
  constructor(private formBuilder:FormBuilder) {
   }

  ngOnInit() {
    this.LoginForm=this.formBuilder.group({
      loginemail:['',[Validators.required,Validators.email]],
      loginpassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern('^[a-zA-z]+$')]]

    });
  }
  get f(){
    return this.LoginForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.LoginForm.invalid){
      return
    }
    alert("Sucess")
  }

}
