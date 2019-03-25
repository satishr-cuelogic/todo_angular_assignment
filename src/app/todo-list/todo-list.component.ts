import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { isNgTemplate } from '@angular/compiler';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
//import { AngularFireDatabase } from 'angularfire2/database';
//import * as L from 'leaflet';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  uname = location.search;
  todos: string;


  list: Todo[];
  constructor(private service: TodoService, private firestore: AngularFirestore, private toster: ToastrService, private router: Router) { }

  ngOnInit() {
    this.uname = this.uname.substr(7, this.uname.length);


    this.service.getTodo().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Todo;
      })
    });


  }

  onEdit(emp: Todo) {
    this.service.todoFormData = Object.assign({}, emp);
    this.router.navigate(['/todolist'], { queryParams: { uname: this.uname } });

  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('todos/' + id).delete();

      this.toster.warning("Todos Successfully", "Create Todo");
    }
  }


}
