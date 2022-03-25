import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.scss']
})
export class AddmoviesComponent implements OnInit {
  constructor(private fromBuilder:FormBuilder) { }
  profileForm: FormGroup;
  
  ngOnInit(): void {
      const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
      this.profileForm = this.fromBuilder.group({
      moviename:['',[Validators.required,Validators.maxLength(60)]],
      description:[''],
      review:[''],
      rating:['',[Validators.required]],
      genre:['',[Validators.required]],
      imageURL:['',[Validators.pattern(reg)]]
    });
  }
  // profileForm = this.fromBuilder.group({
  //   moviename:['',[Validators.required,Validators.maxLength(60)]],
  //   description:[''],
  //   review:[''],
  //   rating:[''],
  //   genre:[''],
  //   imageURL:['']
  // });
  onSubmit(){
    if(this.profileForm.valid){
      console.log('form data is', this.profileForm.value);
      console.log('save working');
    //write back end code to push form data to database..
      this.profileForm.reset();
    }
    
    
  }
  
}
