import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addforums',
  templateUrl: './addforums.component.html',
  styleUrls: ['./addforums.component.scss']
})
export class AddforumsComponent implements OnInit {
  constructor(private fromBuilder:FormBuilder) { }
  profileForm: FormGroup;
  ngOnInit(): void {
    this.profileForm = this.fromBuilder.group({
      moviename:['',[Validators.required]],
      description:['']
      // review:[''],
      // rating:['']
    });
  }
  
  onSubmit(){
    if(this.profileForm.valid){
      console.log('form data is', this.profileForm.value);
      console.log('save working');
      //write back end code to push form data to database..
      this.profileForm.reset();
    }
    
  }
 
}
