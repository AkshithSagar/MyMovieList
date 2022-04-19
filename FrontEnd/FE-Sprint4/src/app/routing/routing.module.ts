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
import { FindforumsComponent } from '../discussions/findforums/findforums.component';
import { MoviebygenreComponent } from '../display/moviebygenre/moviebygenre.component';
import { MoviedetailsComponent } from '../display/moviedetails/moviedetails.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'add-data', component: AddDataComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
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
  {path:'userprofile', redirectTo:'userprofile',pathMatch:'full'},
  {path:'findforums',component:FindforumsComponent},
  {path:'findforums',redirectTo:'findforums',pathMatch:'full'},
  {path:'moviebygenre',component:MoviebygenreComponent},
  {path:'moviebygenre',redirectTo:'moviebygenre',pathMatch:'full'},
  {path:'moviedetails',component:MoviedetailsComponent},
  {path:'moviedetails',redirectTo:'moviedetails',pathMatch:'full'}

  

  
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
