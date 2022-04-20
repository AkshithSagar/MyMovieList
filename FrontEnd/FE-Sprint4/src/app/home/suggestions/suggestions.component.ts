import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { ApiCallService } from 'src/app/api-call.service';
import { DataService } from 'src/app/sharing/data.service';
import { Suggestions } from './suggestions.model';
import { User } from './User.model';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})

export class SuggestionsComponent implements OnInit {
  subscription: Subscription;
   message: string;
   msg:string;
   len:number;
  
  suggestions = []
  constructor(private getapi: ApiCallService, private router: Router,
    private dataservice: DataService) {
    
   }
  
  ngOnInit(): void {
    this.diplaymovies();
    this.subscription = this.dataservice.selectedMovie.subscribe(message=>this.msg= this.message)
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
      this.suggestions.push(new Suggestions(JSON.stringify(results[0]["Name"]),JSON.stringify(results[0]["Genre"]), JSON.stringify(results[0]["Review"])  , 'https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[1]["Name"]),JSON.stringify(results[1]["Genre"]), JSON.stringify(results[1]["Review"])  , 'https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[2]["Name"]),JSON.stringify(results[2]["Genre"]), JSON.stringify(results[2]["Review"])  , 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXGJJq9ioEIztF_HSvK0fnX4UMKjcnEaEsg_WHbGJOeAf3uwft'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[3]["Name"]),JSON.stringify(results[3]["Genre"]), JSON.stringify(results[3]["Review"])  , 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUw076GR7JpnfExoBLTMpiE9otUzk518SylUdC1roF6Ah63NS9'))
      this.suggestions.push(new Suggestions(JSON.stringify(results[4]["Name"]),JSON.stringify(results[4]["Genre"]), JSON.stringify(results[4]["Review"])  , 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGHhTyXCrXrHa0wWxaN5HGknW3Gzuz9WhGfxWbzK2YCVNQEHEP'))
    })
  }
  getMovieDetails(element){
    this.message = element.innerHTML;
    this.len = this.message.length;
    console.log(this.len)
    this.message = this.message.substring(1,this.len-1)
    console.log(this.message)
    this.dataservice.selectMovie(this.message)
    this.router.navigate(['moviedetails'])
      
  }

  // suggestions: Suggestions[]=[
  //   new Suggestions('Title - 1','Genre 1', 'Title Description 1','https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 2','Genre 2 ', 'Title Description 2','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 3','Genre 3', 'Title Description 3','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 4','Genre 4', 'Title Description 4','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg'),
  //   new Suggestions('Title - 4','Genre 5', 'Title Description 5','https://material.angular.io/assets/img/examples/shiba2.jpg','https://material.angular.io/assets/img/examples/shiba1.jpg')
  // ]
  
}
