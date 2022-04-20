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
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  message:string;
  subscription: Subscription;
  name:string;
  genre:string;
  id:string;
  rating:string;
  review:string;
  desc:string;

  constructor(private dataservice: DataService, private getapi: ApiCallService) { }

  ngOnInit(){
    this.subscription = this.dataservice.selectedMovie.subscribe(message=>this.message = message)
    //console.log("In movie details",this.message)
    this.getMovieDetails()
  }
  getMovieDetails(){
    this.getapi.getMovieByName(this.message).subscribe(results=>{
      console.log(results[0]);
      this.name = results[0]["Name"];
      this.genre = results[0]["Genre"];
      this.id = results[0]["ID"];
      this.rating = results[0]["Rating"];
      this.review = results[0]["Review"];
      this.desc = results[0]["Desc"];
      console.log("genre",this.genre)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
