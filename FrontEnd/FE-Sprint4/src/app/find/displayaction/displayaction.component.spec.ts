import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayactionComponent } from './displayaction.component';

describe('DisplayactionComponent', () => {
  let component: DisplayactionComponent;
  let fixture: ComponentFixture<DisplayactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
