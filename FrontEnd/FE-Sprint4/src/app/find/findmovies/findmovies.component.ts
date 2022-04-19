import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('ce') ce: ElementRef;
  message:string;
  message2:string;
  subscription: Subscription;
  subscription2: Subscription;
  searchmsg:string;
  //
  constructor(private data: DataService, private router: Router) { }
  parent:string = null;
  ngOnInit(){
    this.subscription= this.data.currentMessage.subscribe(message=>this.message = message)
    this.subscription2 = this.data.selectedMovie.subscribe(message=>this.message2 = message)
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
  searchBar(){
    //console.log(this.ce.nativeElement.value)
    this.searchmsg = this.ce.nativeElement.value;
    console.log(this.searchmsg);
    this.data.selectMovie(this.searchmsg);
    this.router.navigate(['moviedetails']);    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();

  }
  
 
}
