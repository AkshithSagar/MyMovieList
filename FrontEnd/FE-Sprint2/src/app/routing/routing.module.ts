import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddDataComponent } from '../add-data/add-data.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'add-data', component: AddDataComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'addData', redirectTo:'/add-data', pathMatch:'full'}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
