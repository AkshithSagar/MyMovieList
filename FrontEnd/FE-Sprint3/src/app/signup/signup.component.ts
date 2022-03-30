import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }
  profileForm : FormGroup;

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      email:['',[Validators.required]],
      username:['',[Validators.required,Validators.maxLength(25)]],
      password: ['',[Validators.required]],
      question: ['',[Validators.required]],
      answer: ['',[Validators.required]],
      birthday:['',[Validators.required]]
    })
  }
  onSubmit(){
    var formData: any = new FormData();
    formData.append("email", this.profileForm.get('email').value);
    formData.append("username", this.profileForm.get('username').value);
    formData.append("password", this.profileForm.get('password').value);
    formData.append("question", this.profileForm.get('question').value);
    formData.append("answer", this.profileForm.get('answer').value);
    formData.append("birthday", this.profileForm.get('birthday').value);
    
    for(var value of formData.values()){
      console.log(value);
    }
    if(this.profileForm.valid){
      console.log('signup data is', this.profileForm.value);
      console.log('working');
      this.profileForm.reset();
    }
  }

}
