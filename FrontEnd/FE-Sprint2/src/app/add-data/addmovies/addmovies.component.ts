import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.scss']
})
export class AddmoviesComponent  {
  constructor(private fromBuilder:FormBuilder) { }
  
  profileForm = this.fromBuilder.group({
    moviename:[''],
    description:[''],
    review:[''],
    rating:[''],
    genre:['']
  });
  onSubmit(){
    console.log('form data is', this.profileForm.value);
    console.log('save working');
    //write back end code to push form data to database..
    this.profileForm.reset();
  }
  
}
