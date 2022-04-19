import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url="http://localhost:3000/getAllMovies"
  
  constructor(private httpClient: HttpClient) { }
  getPosts(){
    return this.httpClient.get(this.url);
  }
  getdiscussions(){
    return this.httpClient.get("http://localhost:3000/getAllDiscussions");
  }
  getSuggestedDiscussions(){
    return this.httpClient.get("http://localhost:3000/getBestDiscussions");
  }
  getAction(){
    var object = {}
    object["genre"] = "Adventure"
    var json = JSON.stringify(object)
    return this.httpClient.get("http://localhost:3000/getMovieByGenre")
  }
  getTopFiveMovies(){
    return this.httpClient.get("http://localhost:3000/BestFiveMovies");
  }
  getMovieByGenre(genre:string){
    return this.httpClient.get("http://localhost:3000/getMovieByGenre")
  }
}
