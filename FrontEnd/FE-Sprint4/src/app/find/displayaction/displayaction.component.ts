import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { ApiCallService } from 'src/app/api-call.service';

export interface Element{
  Name: string;
  Rating: number;
  Genre: string;
  Desc: string;
  Review: string;
  ID: string;
}
@Component({
  selector: 'app-displayaction',
  templateUrl: './displayaction.component.html',
  styleUrls: ['./displayaction.component.scss']
})
export class DisplayactionComponent implements OnInit {
  private data:any = []
  tabdata: MatTableDataSource<Element>;
  dataSource: MatTableDataSource<Element>;
  constructor(private getapi: ApiCallService) { }

  ngOnInit(): void {
    
    
    this.getAllValues();
  }
  getAllValues(){
    
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

}
