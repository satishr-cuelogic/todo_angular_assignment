import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser: LoginModel = new LoginModel();
  regUser: RegisterModel = new RegisterModel();
  loginForm: FormGroup;
  hide: boolean = true;
  userName: LoginModel;
  loginuser: string;
  //constructor(private router: Router) {}

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        'email':
          [this.loginUser.email, [Validators.required, Validators.email]],
        'password':
          [this.loginUser.password, [Validators.required, Validators.maxLength(30),
          Validators.minLength(6)]]

      })
  }

  onLoginClick() {
    if (this.loginUser.email != "" && this.loginUser.password != "") {


      this.userName = JSON.parse(localStorage.getItem(this.loginUser.email));
      if (this.loginUser.email.trim() == this.userName.email.trim() && this.loginUser.password.trim() == this.userName.password.trim()) {
        this.regUser = JSON.parse(localStorage.getItem(this.loginUser.email.trim()));

        this.regUser.isAuth = 1;
        localStorage.setItem(this.loginUser.email.trim(), JSON.stringify(this.regUser));

        //this.router.navigate(['/todolist'], { queryParams: { loginuser: this.loginUser.email.trim()}, queryParamsHandling: 'true' });
        window.open('/todolist?uname=' + this.loginUser.email.trim(), '_self');

      }
      else {
        alert("Invalid UserName or Password");
      }
    }
  }



}
