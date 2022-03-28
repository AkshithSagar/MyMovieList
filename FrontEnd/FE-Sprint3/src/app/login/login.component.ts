import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


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
    if(this.profileForm.valid){
      console.log('form data is', this.profileForm.value);
      console.log('working');
      this.profileForm.reset();
      
    }
  }

}
