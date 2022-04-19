import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiCallService } from 'src/app/api-call.service';
import { DataService } from 'src/app/sharing/data.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  message:string;
  subscription: Subscription;
  name:string;
  description:string;
  ID:string;
  review:string;
  rating:string;
  genre:string;

  constructor(private dataservice: DataService, private getapi: ApiCallService) { }
  ngOnInit(){
    this.subscription = this.dataservice.selectedMovie.subscribe(message=>this.message = message)
   // console.log("In movie details",this.message)
    this.displayDetails()
  }
  displayDetails(){
    this.getapi.getMovieByName(this.message).subscribe(results=>{
      this.name = results[0]["Name"];
      this.description = results[0]["Desc"]
      this.review = results[0]["Review"]
      this.rating =results[0]["Rating"]
      this.ID = results[0]["ID"]
      this.genre = results[0]["Genre"]
    })
  }

}
