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
  constructor(private dataservice: DataService, private getapi: ApiCallService) { }

  ngOnInit(){
    this.subscription = this.dataservice.selectedMovie.subscribe(message=>this.message = message)
    //console.log("In movie details",this.message)
    this.getMovieDetails()
  }
  getMovieDetails(){
    this.getapi.getMovieByName(this.message).subscribe(results=>{
      console.log(results);
    })
  }


}
