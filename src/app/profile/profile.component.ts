import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uname:string;

  regUser:RegisterModel=new RegisterModel();


  constructor(private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.uname = params['uname'];
     
  });

  this.regUser=JSON.parse(localStorage.getItem(this.uname));

  

  }
  ngOnInit(){ }

}
