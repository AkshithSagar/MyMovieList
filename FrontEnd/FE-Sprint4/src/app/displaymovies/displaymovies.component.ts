import { Component, OnInit } from '@angular/core';
import { DataService } from '../sharing/data.service';

@Component({
  selector: 'app-displaymovies',
  templateUrl: './displaymovies.component.html',
  styleUrls: ['./displaymovies.component.scss']
})
export class DisplaymoviesComponent implements OnInit {
  message:string;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
