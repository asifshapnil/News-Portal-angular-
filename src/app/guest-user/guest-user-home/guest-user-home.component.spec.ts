import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestUserHomeComponent } from './guest-user-home.component';

describe('GuestUserHomeComponent', () => {
  let component: GuestUserHomeComponent;
  let fixture: ComponentFixture<GuestUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
