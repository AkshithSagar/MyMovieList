import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../sharing/data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit, OnDestroy {
  message:string;
  subscription: Subscription;
  constructor(private data: DataService) { }

  ngOnInit(){
    this.subscription = this.data.currentMessage.subscribe(message=>this.message = message)
    console.log(this.message)

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}
