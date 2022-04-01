import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
      name:['',[Validators.required,Validators.maxLength(60)]],
      description:[''],
      review:[''],
      rating:['',[Validators.required]],
      genre:['',[Validators.required]],
      // imageURL:['',[Validators.pattern(reg)]]
    });
  }
  
  onSubmit(){
    if(this.profileForm.valid){
      console.log('form data is', this.profileForm.value);
      console.log('save working');


      // var formData:any = new FormData();
      // formData.append("name",this.profileForm.get('name').value);
      // formData.append("description",this.profileForm.get('description').value);
      // formData.append("genre",this.profileForm.get('genre').value);
      // formData.append("rating",this.profileForm.get('rating').value);
      // formData.append("review",this.profileForm.get('review').value);
      // var object = {};
      // formData.forEach((value, key) => object[key] = value);
      // var json = JSON.stringify(object);
      // console.log(json);
      // this.http.post('http://localhost:3000/addMovie', json)
      // .subscribe({
      //   next:(response)=> {console.log(response)}
      //   // error:(error)=>console.log(error),
      // });

      this.profileForm.reset();
    }
    
    
  }
  
}
