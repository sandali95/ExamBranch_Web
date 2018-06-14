import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistrationsComponent } from './view-registrations.component';

describe('ViewRegistrationsComponent', () => {
  let component: ViewRegistrationsComponent;
  let fixture: ComponentFixture<ViewRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
