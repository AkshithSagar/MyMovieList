import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopSuggestionsComponent } from './home-page/top-suggestions/top-suggestions.component';
import { TopDiscussionsComponent } from './home-page/top-discussions/top-discussions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddMoviesComponent,
    HomePageComponent,
    TopSuggestionsComponent,
    TopDiscussionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
