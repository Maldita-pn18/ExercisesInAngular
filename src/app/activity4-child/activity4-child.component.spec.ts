import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity4ChildComponent } from './activity4-child.component';

describe('Activity4ChildComponent', () => {
  let component: Activity4ChildComponent;
  let fixture: ComponentFixture<Activity4ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity4ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
