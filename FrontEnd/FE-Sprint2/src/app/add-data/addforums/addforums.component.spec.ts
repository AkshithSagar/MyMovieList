import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddforumsComponent } from "./addforums.component";

describe("AddforumsComponent", () => {
  let component: AddforumsComponent;
  let fixture: ComponentFixture<AddforumsComponent>;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, FormsModule],
      declarations: [AddforumsComponent]
    })
    fixture = TestBed.createComponent(AddforumsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });
  it('form invalid without name input',()=>{
    expect(component.profileForm.valid).toBeFalsy();
  })
  it('checking the entry of name input',()=>{
    let name = component.profileForm.controls['moviename'];
    let errors = {};
    errors = name.errors;
    name.setValue("Can harry potter be remade after 50 years");
    expect(errors['required']).toBeTruthy();
  })
  it('check input for description',()=>{
    let description = component.profileForm.controls['description'];
    let errors = {};
    errors = description.errors;
    description.setValue("No movie ever made can capture the essence of the original picture.");
    expect(errors['required']).toBeTruthy();
  })
  it('submitting a form emits a object',()=>{
    expect(component.profileForm.valid).toBeFalsy();
    component.profileForm.controls['moviename'].setValue("lets talk about HP");
    component.profileForm.controls['description'].setValue("blah blah blah blah blah blah");
    expect(component.profileForm.valid).toBeTruthy();
    let adder: AddforumsComponent;
    component.onSubmit();
    
  })
});