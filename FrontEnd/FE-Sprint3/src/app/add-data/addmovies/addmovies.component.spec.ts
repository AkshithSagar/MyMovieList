import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { AddmoviesComponent } from "./addmovies.component";

describe("AddmoviesComponent", () => {
  let component: AddmoviesComponent;
  let fixture: ComponentFixture<AddmoviesComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, FormsModule],
      declarations: [AddmoviesComponent]
    })
    fixture = TestBed.createComponent(AddmoviesComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });
  it('form invalid when no name input',()=>{
    expect(component.profileForm.valid).toBeFalsy();
  })
  it('movie name field entry is valid and is required',()=>{
    let name = component.profileForm.controls['moviename'];
    let errors = {};
    errors = name.errors;
    expect(errors['required']).toBeTruthy();
    name.setValue("Harry Potter");
  })
  it('description field is valid',()=>{
    let description = component.profileForm.controls['description'];
    expect(description.enabled).toBeTruthy;
    description.setValue("blah blah blag");
  })
  it('review field is valid',()=>{
    let review  = component.profileForm.controls['review'];
    expect(review.enabled).toBeTruthy;
    review.setValue("best in the series");
  })
  it('rating field is valid and is required',()=>{
    let rating = component.profileForm.controls['rating'];
    let errors = {};
    errors = rating.errors;
    expect(errors['required']).toBeTruthy();
    rating.setValue("1");
  })
  it('genre field is valid and is required',()=>{
    let genre = component.profileForm.controls['genre'];
    let errors = {};
    errors = genre.errors;
    expect(errors['required']).toBeTruthy();
    genre.setValue("1");
  })
  it('URL field is valid and has pattern',()=>{
    let errors = {};
    let imageurl = component.profileForm.controls['imageURL'];
    expect(imageurl.valid).toBeTruthy();
    imageurl.setValue("http://www.google.com");
    errors = imageurl.errors || {};
    expect(errors['pattern']).toBeFalsy();
  })
  it('submitting a form emits a object',()=>{
    expect(component.profileForm.valid).toBeFalsy();
    component.profileForm.controls['moviename'].setValue("lets talk about HP");
    component.profileForm.controls['description'].setValue("blah blah blah blah blah blah");
    component.profileForm.controls['review'].setValue("blah blah blah blah blah blah");
    component.profileForm.controls['rating'].setValue("1");
    component.profileForm.controls['genre'].setValue("Action");
    component.profileForm.controls['imageURL'].setValue("http://www.google.com");
    expect(component.profileForm.valid).toBeTruthy();
    let adder: AddmoviesComponent;
    component.onSubmit();
  })

});