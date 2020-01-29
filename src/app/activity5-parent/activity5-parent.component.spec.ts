import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity5ParentComponent } from './activity5-parent.component';

describe('Activity5ParentComponent', () => {
  let component: Activity5ParentComponent;
  let fixture: ComponentFixture<Activity5ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity5ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity5ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
