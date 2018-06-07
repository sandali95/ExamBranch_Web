import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamstableComponent } from './examstable.component';

describe('ExamstableComponent', () => {
  let component: ExamstableComponent;
  let fixture: ComponentFixture<ExamstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
