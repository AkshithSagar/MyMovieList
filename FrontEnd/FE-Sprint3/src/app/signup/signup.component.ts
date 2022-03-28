import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
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
    if(this.profileForm.valid){
      console.log('signup data is', this.profileForm.value);
      console.log('working');
      this.profileForm.reset();
    }
  }

}
