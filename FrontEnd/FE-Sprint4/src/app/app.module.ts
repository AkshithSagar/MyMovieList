import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SuggestionsComponent } from './home/suggestions/suggestions.component';
import { DiscussionsComponent } from './home/discussions/discussions.component';
import { AddDataComponent } from './add-data/add-data.component';
import { AddmoviesComponent } from './add-data/addmovies/addmovies.component';
import { AddforumsComponent } from './add-data/addforums/addforums.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FindmoviesComponent } from './find/findmovies/findmovies.component';
import { DisplayresultsComponent } from './find/findmovies/displayresults/displayresults.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    SuggestionsComponent,
    DiscussionsComponent,
    AddDataComponent,
    AddmoviesComponent,
    AddforumsComponent,
    LoginComponent,
    SignupComponent,
    FindmoviesComponent,
    DisplayresultsComponent
    
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
