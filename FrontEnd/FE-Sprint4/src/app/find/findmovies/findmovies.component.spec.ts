import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmoviesComponent } from './findmovies.component';

describe('FindmoviesComponent', () => {
  let component: FindmoviesComponent;
  let fixture: ComponentFixture<FindmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
