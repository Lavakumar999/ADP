import { Component, OnInit } from '@angular/core';
import{FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationValidator } from '../register/register.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
  '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class RegisterComponent implements OnInit {
  passwordFormGroup: FormGroup;
  RegisterForm:FormGroup;
  submitted=false;
  
  constructor(private formBuilder:FormBuilder) {
   }

  ngOnInit() {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      cPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.RegisterForm=this.formBuilder.group({
      fname:['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      lname:['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      dob:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern('^[a-zA-z]+$')]],
      passwordFormGroup: this.passwordFormGroup
    });
   
  }
  get f(){
    return this.RegisterForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.RegisterForm.invalid){
      return
    }
    alert("Sucess")
  }

}
