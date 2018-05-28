import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRegistartionComponent } from './exam-registartion.component';

describe('ExamRegistartionComponent', () => {
  let component: ExamRegistartionComponent;
  let fixture: ComponentFixture<ExamRegistartionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRegistartionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
