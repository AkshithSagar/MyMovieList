import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/sharing/data.service';

@Component({
  selector: 'app-moviebygenre',
  templateUrl: './moviebygenre.component.html',
  styleUrls: ['./moviebygenre.component.scss']
})
export class MoviebygenreComponent implements OnInit,OnDestroy {
  message:string;
  subscription: Subscription
  constructor(private data: DataService,private http:HttpClient) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message=>this.message = message)
    console.log(this.message)
    const headers = {"Content-Type":"application/json","genre":"Thriller"}
    this.http.get("http://localhost:3000/getMovieByGenre",{headers}).subscribe(response=>{
      console.log(response)
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}
