import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddDataComponent } from '../add-data/add-data.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FindmoviesComponent } from '../find/findmovies/findmovies.component';
import { DisplayresultsComponent } from '../find/findmovies/displayresults/displayresults.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'add-data', component: AddDataComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'addData', redirectTo:'/add-data', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'login', redirectTo:'/login', pathMatch:'full'},
  {path:'signup', component: SignupComponent},
  {path:'signup', redirectTo:'/signup', pathMatch:'full'},
  {path:'findmovies',component: FindmoviesComponent},
  {path:'findmovies',redirectTo:'/findmovies',pathMatch:'full'},
  {path:'displayresults', component: DisplayresultsComponent},
  {path:'displayresults',redirectTo:'/displayresults',pathMatch:'full'},
  {path:'userprofile', component: UserprofileComponent},
  {path:'userprofile', redirectTo:'userprofile',pathMatch:'full'}
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
