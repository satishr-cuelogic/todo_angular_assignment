import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoFormData:Todo;

  constructor(private firestore:AngularFirestore) { }

  getTodo()
  {
    return this.firestore.collection('todos').snapshotChanges();

    //this.firestore.collection('todo').snapshotChanges().or
  }

}
