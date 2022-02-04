import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {path:'headercomponent',component: HeaderComponent},
  {path:'addmoviecomponent',component: AddMoviesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
