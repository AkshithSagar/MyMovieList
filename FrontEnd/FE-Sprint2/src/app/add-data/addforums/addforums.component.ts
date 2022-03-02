import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-addforums',
  templateUrl: './addforums.component.html',
  styleUrls: ['./addforums.component.scss']
})
export class AddforumsComponent {
  constructor(private fromBuilder:FormBuilder) { }

  profileForm = this.fromBuilder.group({
    moviename:[''],
    description:['']
    // review:[''],
    // rating:['']
  });
  onSubmit(){
    console.log('form data is', this.profileForm.value);
    console.log('save working');
    //write back end code to push form data to database..
    this.profileForm.reset();
  }
  
  
}
