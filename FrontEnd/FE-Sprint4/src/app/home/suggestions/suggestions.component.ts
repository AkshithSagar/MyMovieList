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
      // for(var counter:number =0;counter<5;counter++){
      //   this.suggestions.push(new Suggestions(JSON.stringify(results[counter]["Name"]),JSON.stringify(results[counter]["Genre"]), JSON.stringify(results[counter]["Desc"])  , 'https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg'))
      // }
      this.suggestions.push(new Suggestions(JSON.stringify(results[0]["Name"]),JSON.stringify(results[0]["Genre"]), JSON.stringify(results[0]["Desc"])  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy99-JIoQD_tDXwVlktYQVhmWUZPAVX92Tq4FIssNpJ9WDQYrP'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[1]["Name"]),JSON.stringify(results[1]["Genre"]), JSON.stringify(results[1]["Desc"])  , 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5uxkfEsqCe-oN5gfCK0jE2FiXlntNoYuyNmookn5PBBMTV5Yj'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[2]["Name"]),JSON.stringify(results[2]["Genre"]), JSON.stringify(results[2]["Desc"])  , 'https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[3]["Name"]),JSON.stringify(results[3]["Genre"]), JSON.stringify(results[3]["Desc"])  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy99-JIoQD_tDXwVlktYQVhmWUZPAVX92Tq4FIssNpJ9WDQYrP'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[4]["Name"]),JSON.stringify(results[4]["Genre"]), JSON.stringify(results[4]["Desc"])  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhbU5pWXmpsBxgV6PFL-kAxVAihDFPueGh0n2HoUbWZdFp_AC'))



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
