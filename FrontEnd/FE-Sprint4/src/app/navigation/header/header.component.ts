import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/sharing/data.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDisabled=true;
  message:string;
  subscription: Subscription;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router:Router,private datservice: DataService) { }

  ngOnInit(): void {
    this.subscription = this.datservice.loginUser.subscribe(message=>{
      this.message  = message;
      if(this.message == 'Login'){
        this.isDisabled = false;
      }
      
    })
    
  }
  
  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
}
