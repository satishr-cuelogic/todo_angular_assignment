import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import {FormsModule} from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './todos/create-todo/create-todo.component';
import { AppRoutingModule } from './app-routing.module'; 


import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
//import { TodolistComponent } from './todolist/todolist.component';
//import { CreatetodoComponent } from './todolist/createtodo/createtodo.component';
//import { ProfileComponent } from './todolist/profile/profile.component';
//import { FiltergridComponent } from './todolist/filtergrid/filtergrid.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    CreateTodoComponent,
    
    LoginComponent,
    RegistrationComponent,
    NavBarComponent,
    ProfileComponent,
    


  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
