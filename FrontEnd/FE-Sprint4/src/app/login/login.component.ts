import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../sharing/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('ce') ce: ElementRef;
  subscription: Subscription;
  message:string;

  uname:string;
  pwd:string;
  accepted:string;
  constructor(private formBuilder: FormBuilder, private getapi: ApiCallService,
    private router:Router,private dataservice: DataService) { }
  profileForm: FormGroup;

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.maxLength(25)]],
      password:['',[Validators.required, Validators.maxLength(32)]]
    })
    this.subscription = this.dataservice.loginUser.
    subscribe(message=>this.message = message)
  }
  onSubmit(){
    var formData: any = new FormData();
    this.uname = this.profileForm.get('username').value;
    this.pwd = this.profileForm.get('password').value;

    this.getapi.checkLogin(this.uname,this.pwd).subscribe(results=>{
      this.accepted = results["Body"]
      console.log("rsult is",this.accepted)
      if(this.accepted === 'true'){
        console.log("line bedore home")
        this.router.navigate(['/home']);
        this.dataservice.setLogin(this.uname);
      }
      else{
        this.ce.nativeElement.innerHTML = 'Incorrect username or password. Please try again.'
      }
    })
    this.profileForm.reset();
    console.log("outside",this.accepted)
  }

}
