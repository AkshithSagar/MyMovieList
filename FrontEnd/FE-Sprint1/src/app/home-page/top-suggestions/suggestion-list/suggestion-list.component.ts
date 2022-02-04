import { Component, OnInit } from '@angular/core';
import { Suggestions } from '../top-suggestion.model';


@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  suggestions: Suggestions[] = [
    new Suggestions('Test Name1','Test Description 1', 'https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg'),
    new Suggestions('Test Name2', 'Test Description 2', 'https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_SL1500_.jpg'),
    new Suggestions('Test Name3','Test Description 3', 'https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg'),
    new Suggestions('Test Name4', 'Test Description 4', 'https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_SL1500_.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
