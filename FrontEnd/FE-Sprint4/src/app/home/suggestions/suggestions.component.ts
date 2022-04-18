import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/api-call.service';
import { Suggestions } from './suggestions.model';
import { User } from './User.model';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})

export class SuggestionsComponent implements OnInit {

  suggestions = []
  constructor(private getapi: ApiCallService) {
    
   }
  
  ngOnInit(): void {
    this.diplaymovies();
  }
  diplaymovies(){
    this.getapi.getTopFiveMovies().subscribe((results)=>{
      console.log(JSON.stringify(results))
      //this.suggestions.push(new Suggestions('Title - 1','Genre 1', 'Title Description 1','https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'))
      //this.suggestions.push()
      //let user = new User()
      //this.suggestions.push(new Suggestions(JSON.stringify(results[2]["Name"]),JSON.stringify(results[0]["Genre"]), JSON.stringify(results[0]["Desc"])  , 'https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'))
      for(var counter:number =0;counter<5;counter++){
        this.suggestions.push(new Suggestions(JSON.stringify(results[counter]["Name"]),JSON.stringify(results[counter]["Genre"]), JSON.stringify(results[counter]["Desc"])  , 'https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg'))
      }

    })
  }

  // suggestions: Suggestions[]=[
  //   new Suggestions('Title - 1','Genre 1', 'Title Description 1','https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 2','Genre 2 ', 'Title Description 2','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 3','Genre 3', 'Title Description 3','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 4','Genre 4', 'Title Description 4','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 4','Genre 5', 'Title Description 5','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg')
  // ]
  
}
