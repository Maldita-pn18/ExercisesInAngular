import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity5ChildComponent } from './activity5-child.component';

describe('Activity5ChildComponent', () => {
  let component: Activity5ChildComponent;
  let fixture: ComponentFixture<Activity5ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity5ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
