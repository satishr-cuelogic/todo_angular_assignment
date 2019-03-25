import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from '../../shared/todo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
 
  constructor(private service:TodoService, private firestore:AngularFirestore,private toster:ToastrService,private router: Router) { 
    this.uname = location.search;
    this.uname = this.uname.substr(7, this.uname.length);
  }

  uname:string;
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :NgForm)
  {
    if(form!=null )
    form.resetForm();
    this.service.todoFormData={
      id:null,
      title : '',
      todate:'',
      todoStatus : '',
      rememberDate:'',
      isPublic:'',
      imagePath:''
    }
   
  }
  onSubmit(form:NgForm)
  {
    let data=Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null)
      this.firestore.collection('todos').add(data);
    else
      this.firestore.doc('todos/'+form.value.id).update(data);
    this.resetForm(form);
    this.toster.success('Submitted Successfully','Todo Created');
    this.router.navigate(['/todolists'],{ queryParams: { uname: this.uname }});
  }
  onClick() {

    this.uname = location.search;
    this.uname = this.uname.substr(7, this.uname.length);
    //this.router.navigate(['q']);

  }
  

}
