import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  regUser: RegisterModel = new RegisterModel();
  uname: string;
  param1: string;
  constructor(private router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.param1 = params['uname'];

    });

    this.regUser = JSON.parse(localStorage.getItem(this.param1.trim()));
    if (this.regUser.isAuth == 0) {
      this.router.navigate(['/login']);
    }
  }


  ngOnInit() {
  }

  onClick() {

    this.uname = location.search;
    this.uname = this.uname.substr(7, this.uname.length);
    this.router.navigate(['/profile'], { queryParams: { uname: this.uname } });

  }

  onLogout() {

    this.regUser.isAuth = 0;
    localStorage.setItem(this.param1.trim(), JSON.stringify(this.regUser));
    this.router.navigate(['/login']);
  }
}
