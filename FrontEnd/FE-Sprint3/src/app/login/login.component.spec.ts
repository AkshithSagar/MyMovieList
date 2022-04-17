import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import {LoginComponent} from "./login.component";

describe("LoginComponent", () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
          imports:[ReactiveFormsModule, FormsModule],
          declarations: [LoginComponent]
        })
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
      });
      it('form invalid when no name input',()=>{
        expect(component.profileForm.valid).toBeFalsy();
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
        review.setValue("best in the series");
      })
      it('submitting a form emits a object',()=>{
        expect(component.profileForm.valid).toBeFalsy();
        component.profileForm.controls['username'].setValue("letstalkaboutHP");
        component.profileForm.controls['password'].setValue("batman");
        expect(component.profileForm.valid).toBeTruthy();
        let adder: LoginComponent;
        component.onSubmit();
      })
    
    });