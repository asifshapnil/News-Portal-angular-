import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThisWeekComponent } from './popular-this-week.component';

describe('PopularThisWeekComponent', () => {
  let component: PopularThisWeekComponent;
  let fixture: ComponentFixture<PopularThisWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularThisWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularThisWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
