import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
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
  selector: 'app-moviebygenre',
  templateUrl: './moviebygenre.component.html',
  styleUrls: ['./moviebygenre.component.scss']
})
export class MoviebygenreComponent implements OnInit,OnDestroy {
  message:string;
  subscription: Subscription;
  dataSource: MatTableDataSource<Element>;
  constructor(private dataservice: DataService,private http:HttpClient,private getapi: ApiCallService) { }

  ngOnInit() {
    this.subscription = this.dataservice.currentMessage.subscribe(message=>this.message = message)
    console.log(this.message)
    const headers = {"genre":"Thriller"}
    this.getAllValues();

  }
  getAllValues(){
    this.getapi.getMovieByGenre(this.message).subscribe((results)=>{
      console.log(results)
      this.dataSource = new MatTableDataSource(<any>results);
      
    })
  }
  displayedColumns: string[] = ['Name', 'Rating', 'Genre'];

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}
