import { Component, OnInit } from '@angular/core';
import { RegisterModel} from '../models/register.model';
import { FormGroup ,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user : RegisterModel=new RegisterModel();
  registerForm :FormGroup;
  hide:boolean=true;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group(
      { 
        'name':
        [this.user.name, [Validators.required]],
        'email':
        [this.user.email,[Validators.required,Validators.email]],
        'password' : 
        [this.user.password,[Validators.required,Validators.maxLength(30),
        Validators.minLength(6)]]

    })
  }

  onRegisterSubmit()
  {
    alert("Name: "+this.user.name+' '+"Email: "+this.user.email+' '+"Password: "+this.user.password+' '+this.user.todolist);
  }
  
  onRegisterClick()
  {
    //this.user.todolist.push("Hi");
    //this.user.todolist.push("Hello");
    localStorage.setItem(this.user.email,JSON.stringify(this.user));
    alert("Registration completed successfully");
  }

 
}
