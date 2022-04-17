import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addforums',
  templateUrl: './addforums.component.html',
  styleUrls: ['./addforums.component.scss']
})
export class AddforumsComponent implements OnInit {
  constructor(private fromBuilder:FormBuilder,private http:HttpClient) { }
  profileForm: FormGroup;
  ngOnInit(): void {
    this.profileForm = this.fromBuilder.group({
      moviename:['',[Validators.required]],
      description:['',[Validators.required]]
      // review:[''],
      // rating:['']
    });
  }
  
  onSubmit(){
    if(this.profileForm.valid){
      console.log('form data is', this.profileForm.value);
      console.log('save working');
      //write back end code to push form data to database..
      var formData:any = new FormData();
      formData.append("TopicName",this.profileForm.get('moviename').value);
      formData.append("Description",this.profileForm.get('description').value);
      var object={}
      formData.forEach((value,key)=>object[key]=value);
      var json = JSON.stringify(object);
      console.log(json)
      this.http.post('http://localhost:3000/addD',json)
      .subscribe({
        next:(response)=>{
          console.log(response)
        }
      });
      this.profileForm.reset();
    }
    
  }
 
}
