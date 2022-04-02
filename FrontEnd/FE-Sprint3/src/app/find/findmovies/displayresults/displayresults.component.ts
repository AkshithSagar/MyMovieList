import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Elements{
  name: string;
  rating: number;
  genre: string;
}
const ELEMENT_DATA: Elements[] = [
  {name:'Harry Potter',rating:5,genre:'Adventure'},
  {name:'Pirates of the sea',rating:3,genre:'Adventure'},
  {name:'Avengers',rating:5,genre:'Action'},
  {name:'Interstellar',rating:5,genre:'Sci-Fi'},
  {name:'La la land',rating:3,genre:'Romance'},
  {name:'One Piece',rating:5,genre:'Anime'},  
];
@Component({
  selector: 'app-displayresults',
  templateUrl: './displayresults.component.html',
  styleUrls: ['./displayresults.component.scss']
})
export class DisplayresultsComponent  {
  constructor() { }
  displayedColumns: string[] = ['name', 'rating', 'genre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  

}
