import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiCallService } from 'src/app/api-call.service';
import { DataService } from 'src/app/sharing/data.service';

export interface Element{
  Name: string;
  Rating: number;
  Genre: string;
  Desc: string;
  Review: string;
  ID: string;
}

@Component({
  selector: 'app-displayresults',
  templateUrl: './displayresults.component.html',
  styleUrls: ['./displayresults.component.scss']
})

export class DisplayresultsComponent implements OnInit {
  message:string;
  subscription: Subscription;

  dataSource: MatTableDataSource<Element>;
  constructor(private getapi: ApiCallService, private dataservice: DataService, private router:Router) { 
  }
/////
  ngOnInit(){
    this.getAllValues();
    this.subscription = this.dataservice.selectedMovie.subscribe(message=>this.message=message)
  
  }  
//////
  getAllValues(){
    this.getapi.getPosts().subscribe((results)=>{
      console.log(results)
      this.dataSource = new MatTableDataSource(<any>results);
      //console.log(ELEMENT_DATA)
    })
  }
  displayedColumns: string[] = ['Name', 'Rating', 'Genre'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  
  movieDetails(element){
    this.message = element.innerHTML;
    console.log(this.message);
    this.dataservice.selectMovie(this.message)
    this.router.navigate(['moviedetails'])
  }
  ngOnDestroy(){

  }

}
