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
  constructor(private data: DataService, private router: Router) { }
  parent:string = null;
  ngOnInit():void{
    
  }
  public allMovies():void{
    this.parent = "AllMovies";
    //this.router.navigate(['displayresults'], { state: { example: 'bar' } });
    this.router.navigate(['displayresults'])
  }
  public Action():void {
    this.parent = "Action";
    this.router.navigate(['displayaction'])

  }
  public SciFi():void{
    this.parent = "SciFi";
  }
  public Anime():void{
    this.parent = "Anime";
  }
  public Family():void{
    this.parent = "Family";
  }
  public Romance():void{
    this.parent = "Romance";
  }

 
}
