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

}
