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
  it('movie name field entry is valid',()=>{
    let name = component.profileForm.controls['moviename'];
    let errors = {};
    errors = name.errors;
    expect(errors['required']).toBeTruthy();
  })
});