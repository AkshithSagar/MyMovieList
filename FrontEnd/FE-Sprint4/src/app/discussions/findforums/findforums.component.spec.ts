import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindforumsComponent } from './findforums.component';

describe('FindforumsComponent', () => {
  let component: FindforumsComponent;
  let fixture: ComponentFixture<FindforumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindforumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindforumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
