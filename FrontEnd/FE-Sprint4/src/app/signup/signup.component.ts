import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router:Router,
    private getapi:ApiCallService, private http: HttpClient) { }
  profileForm : FormGroup;

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      email:['',[Validators.required]],
      username:['',[Validators.required,Validators.maxLength(25)]],
      password: ['',[Validators.required]],
      question: ['',[Validators.required]],
      answer: ['',[Validators.required]],
      //birthday:['',[Validators.required]]
      birthday:['']
    })
  }
  sendDetails(){
    var formData: any = new FormData();
    

  
    if(this.profileForm.valid){
      formData.append("email", this.profileForm.get('email').value);
      formData.append("username", this.profileForm.get('username').value);
      formData.append("password", this.profileForm.get('password').value);
      formData.append("question", this.profileForm.get('question').value);
      formData.append("answer", this.profileForm.get('answer').value);
      formData.append("birthday", this.profileForm.get('birthday').value);
      for(var value of formData.values()){
        console.log(value);
      }
      var object = {};
      formData.forEach((value,key)=>object[key]=value);
      var json = JSON.stringify(object);
      console.log("string data",json);
      this.http.post('http://localhost:3000/addS',json).subscribe({
        next:(response)=>{
          console.log(response)
        }
      })
      
      this.profileForm.reset();
    }
    
    
  }
  
}
