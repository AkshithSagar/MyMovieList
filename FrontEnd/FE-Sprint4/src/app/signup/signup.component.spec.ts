import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import {SignupComponent} from "./signup.component";

describe("SignupComponent", () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
          imports:[ReactiveFormsModule, FormsModule],
          declarations: [SignupComponent]
        })
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
      });
      it('form invalid when no name input',()=>{
        expect(component.profileForm.valid).toBeFalsy();
      })
      it('email is required',()=>{
        let name = component.profileForm.controls['email'];
        let errors = {};
        errors = name.errors;
        expect(errors['required']).toBeTruthy();
        name.setValue("Harry");
      })
      it('Username is required',()=>{
        let name = component.profileForm.controls['username'];
        let errors = {};
        errors = name.errors;
        expect(errors['required']).toBeTruthy();
        name.setValue("Harry");
      })
      it('password is valid',()=>{
        let review  = component.profileForm.controls['password'];
        expect(review.enabled).toBeTruthy;
        review.setValue("bestintheseries");
      })
      it('submitting a form emits a object',()=>{
        expect(component.profileForm.valid).toBeFalsy();
        component.profileForm.controls['username'].setValue("letstalkaboutHP");
        component.profileForm.controls['password'].setValue("batman");
        component.profileForm.controls['email'].setValue("alindobraisgreat@ufl.edu");
        component.profileForm.controls['question'].setValue("Name of your first pet");
        component.profileForm.controls['answer'].setValue("Ruthwik");
        expect(component.profileForm.valid).toBeTruthy();
        let adder: SignupComponent;
        component.sendDetails();
      })
    
    });