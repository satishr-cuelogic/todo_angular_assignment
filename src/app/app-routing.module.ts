import { CreateTodoComponent } from './todos/create-todo/create-todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos/todos.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path :'',component: LoginComponent},
  {path : 'registration',component:RegistrationComponent},
  {path :'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'todolists',component:TodoListComponent},
  {path :'todolist',component:TodosComponent,
   children:[
     {path:'createdtodo',component:CreateTodoComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }



