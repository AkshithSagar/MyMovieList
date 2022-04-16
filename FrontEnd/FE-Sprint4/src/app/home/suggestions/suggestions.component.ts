import { Component, OnInit } from '@angular/core';
import { Suggestions } from './suggestions.model';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  suggestions: Suggestions[]=[
    new Suggestions('Title - 1','Genre 1', 'Title Description 1','https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Suggestions('Title - 2','Genre 2 ', 'Title Description 2','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Suggestions('Title - 3','Genre 3', 'Title Description 3','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Suggestions('Title - 4','Genre 4', 'Title Description 4','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Suggestions('Title - 4','Genre 5', 'Title Description 5','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg')

  ]

}
