import { DiscussionsComponent } from "./discussions.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("LoginComponent", () => {
    let component: DiscussionsComponent;
    let fixture: ComponentFixture<DiscussionsComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
          imports:[ReactiveFormsModule, FormsModule],
          declarations: [DiscussionsComponent]
        })
        fixture = TestBed.createComponent(DiscussionsComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
      });
      
});