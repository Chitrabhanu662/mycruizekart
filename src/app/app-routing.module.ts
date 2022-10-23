import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
// import { AboutComponent } from './MyComponents/about/about.component';
import { HeaderComponent } from './MyComponents/header/header.component';
// import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  // { path: '', component: TodosComponent },
  // { path: '', component: AboutComponent },
  // { path: '', component: HeaderComponent }
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
