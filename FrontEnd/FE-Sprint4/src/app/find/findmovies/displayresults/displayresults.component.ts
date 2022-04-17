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
  @Input() childmessage:string;
  private data:any = []
  tabdata: MatTableDataSource<Element>;
  dataSource: MatTableDataSource<Element>;
  constructor(private getapi: ApiCallService, private dataservice: DataService, private router:Router) { 
  }
/////
  ngOnInit(){
    console.log(this.childmessage)
    
    this.getAllValues();
    
  }  
//////
  getAllValues(){
    if(this.childmessage == "AllMovies"){
      
    }
    this.getapi.getPosts().subscribe((results)=>{
      console.log(results)
      //console.warn("result",results)
      //this.data=results
      //this.tabdata = new MatTableDataSource(<any>results);
      this.dataSource = new MatTableDataSource(<any>results);

      console.log(this.data)
      console.log(this.tabdata)
      //console.log(ELEMENT_DATA)
    })
  }
  displayedColumns: string[] = ['Name', 'Rating', 'Genre'];
  //dataSource = new MatTableDataSource(this.data);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  
  ngOnDestroy(){
  }

}
