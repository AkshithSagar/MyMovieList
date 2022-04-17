import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymoviesComponent } from './displaymovies.component';

describe('DisplaymoviesComponent', () => {
  let component: DisplaymoviesComponent;
  let fixture: ComponentFixture<DisplaymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaymoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
