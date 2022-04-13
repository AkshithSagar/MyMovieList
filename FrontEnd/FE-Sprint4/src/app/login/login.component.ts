import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  profileForm: FormGroup;

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.maxLength(25)]],
      password:['',[Validators.required, Validators.maxLength(32)]]
    })
  }
  onSubmit(){
    var formData: any = new FormData();
    formData.append("username",this.profileForm.get('username').value);
    formData.append("password",this.profileForm.get('password').value);
    for(var value of formData.values()){
      console.log(value);
    }

    if(this.profileForm.valid){
      console.log('form data is', this.profileForm.value);
      console.log('working');
      this.profileForm.reset();
      
    }
  }

}
