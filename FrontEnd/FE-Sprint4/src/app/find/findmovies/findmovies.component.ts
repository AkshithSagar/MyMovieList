import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/sharing/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-findmovies',
  templateUrl: './findmovies.component.html',
  styleUrls: ['./findmovies.component.scss']
})
export class FindmoviesComponent implements OnInit {
  //
  message:string;
  subscription: Subscription;
  //
  constructor(private data: DataService, private router: Router) { }
  parent:string = null;
  ngOnInit(){
    this.subscription= this.data.currentMessage.subscribe(message=>this.message = message)
  }
  public allMovies():void{
    this.parent = "AllMovies";
    //this.router.navigate(['displayresults'], { state: { example: 'bar' } });
    this.router.navigate(['displayresults'])
  }
 
  newMessage(){
    this.data.changeMessage("Action Movies")
    this.router.navigate(['moviebygenre'])
  }
  getAction(){
    this.data.changeMessage("Action")
    this.router.navigate(['moviebygenre'])
  }
  getAdventure(){
    this.data.changeMessage("Adventure")
    this.router.navigate(['moviebygenre'])
  }
  getAnime(){
    this.data.changeMessage("Anime")
    this.router.navigate(['moviebygenre'])
  }
  getFamily(){
    this.data.changeMessage("Family")
    this.router.navigate(['moviebygenre'])
  }
  getSciFi(){
    this.data.changeMessage("SciFi")
    this.router.navigate(['moviebygenre'])
  }
  getRomance(){
    this.data.changeMessage("Romance")
    this.router.navigate(['moviebygenre'])
  }
  getThriller(){
    this.data.changeMessage("Thriller")
    this.router.navigate(['moviebygenre'])
  }

 
}
