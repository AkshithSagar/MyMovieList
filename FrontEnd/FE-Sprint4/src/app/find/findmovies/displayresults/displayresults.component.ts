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

// const ELEMENT_DATA: Element[] = [
//   {Name:'Harry Potter',Rating:5,Genre:'Adventure'},
//   {Name:'Pirates of the sea',Rating:3,Genre:'Adventure'},
//   {Name:'Avengers',Rating:5,Genre:'Action'},
//   {Name:'Interstellar',Rating:5,Genre:'Sci-Fi'},
//   {Name:'La la land',Rating:3,Genre:'Romance'},
//   {Name:'One Piece',Rating:5,Genre:'Anime'},  
// ];

@Component({
  selector: 'app-displayresults',
  templateUrl: './displayresults.component.html',
  styleUrls: ['./displayresults.component.scss']
})

export class DisplayresultsComponent implements OnInit {
  private data:any = []
  tabdata: MatTableDataSource<Element>;
  dataSource: MatTableDataSource<Element>;

  constructor(private getapi: ApiCallService) { }
  ngOnInit(){
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
