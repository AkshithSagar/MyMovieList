import { Component, OnInit } from '@angular/core';
import { Suggestions } from '../top-suggestion.model';


@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  suggestions: Suggestions[] = [
    new Suggestions('Test Name1','Test DEscription', 'https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
