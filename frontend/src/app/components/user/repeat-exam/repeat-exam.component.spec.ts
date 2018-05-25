import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatExamComponent } from './repeat-exam.component';

describe('RepeatExamComponent', () => {
  let component: RepeatExamComponent;
  let fixture: ComponentFixture<RepeatExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
