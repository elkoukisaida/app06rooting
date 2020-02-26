import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { WeatherComponent } from './weather/weather.component';
import {MenuComponent} from './menu/menu.component';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent },
  {path: 'add', component: AddComponent },
  {path: 'list', component: ListComponent},
  {path: 'update/:i', component: UpdateComponent},
  {path : 'weather', component: WeatherComponent},
  {path : 'register', component: RegisterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
