import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity7TemplateComponent } from './activity7-template.component';

describe('Activity7TemplateComponent', () => {
  let component: Activity7TemplateComponent;
  let fixture: ComponentFixture<Activity7TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity7TemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity7TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
