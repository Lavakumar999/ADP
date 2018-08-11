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
  gender:boolean;
  constructor(private formBuilder:FormBuilder) {
   }

  ngOnInit() {
    this.RegisterForm=this.formBuilder.group({
      fname:['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      lname:['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      dob:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      passwordFormGroup: this.passwordFormGroup
    });
    this.passwordFormGroup = this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern('^[a-zA-z]+$')]],
      cPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.gender=true;
   
  }
  get f(){
    return this.RegisterForm.controls;
  }
  get pass(){
    return this.passwordFormGroup.controls;
  }
  onSubmit(regsitervalues){
    this.submitted=true;
    console.log(regsitervalues)
    console.log("Person Details")
    console.log(regsitervalues["fname"])
    console.log(this.passwordFormGroup.controls.password.value)
    //console.log(this.RegisterForm{("password")})
    if(this.RegisterForm.invalid){
      return
    }
    alert("Sucess")
  
  }

}
