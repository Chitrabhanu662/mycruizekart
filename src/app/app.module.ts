import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodosComponent } from './MyComponents/todos/todos.component';
// import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
// import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
// import { AboutComponent } from './MyComponents/about/about.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './MyComponents/searchbar/searchbar.component';
import { HeaderComponent } from './MyComponents/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: "serverApp"}),
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
