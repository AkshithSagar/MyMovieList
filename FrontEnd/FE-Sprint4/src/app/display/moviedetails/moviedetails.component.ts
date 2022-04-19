import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/sharing/data.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  message:string;
  subscription: Subscription;
  constructor(private dataservice: DataService) { }

  ngOnInit(){
    this.subscription = this.dataservice.selectedMovie.subscribe(message=>this.message = message)
    console.log("In movie details",this.message)
  }

}
