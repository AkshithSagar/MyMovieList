import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopSuggestionsComponent } from './home-page/top-suggestions/top-suggestions.component';
import { TopDiscussionsComponent } from './home-page/top-discussions/top-discussions.component';
import { SuggestionListComponent } from './home-page/top-suggestions/suggestion-list/suggestion-list.component';
import { SuggestionItemComponent } from './home-page/top-suggestions/suggestion-list/suggestion-item/suggestion-item.component';
import { DiscussionListComponent } from './home-page/top-discussions/discussion-list/discussion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddMoviesComponent,
    HomePageComponent,
    TopSuggestionsComponent,
    TopDiscussionsComponent,
    SuggestionListComponent,
    SuggestionItemComponent,
    DiscussionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
