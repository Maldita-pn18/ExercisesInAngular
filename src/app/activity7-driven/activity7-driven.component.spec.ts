import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity7DrivenComponent } from './activity7-driven.component';

describe('Activity7DrivenComponent', () => {
  let component: Activity7DrivenComponent;
  let fixture: ComponentFixture<Activity7DrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity7DrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity7DrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
