import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  step = 0;
  index = 0;
  cs_1 = {
    index: [],
    subjects: []
  };
  is_1 = {
    index: [],
    subjects: []
  };
  cs_2 = {
    index: [],
    subjects: []
  };
  is_2 = {
    index: [],
    subjects: []
  };
  cs_3 = {
    index: [],
    subjects: []
  };
  is_3 = {
    index: [],
    subjects: []
  };
  se_3 = {
    index: [],
    subjects: []
  };
  op_3 = {
    index: [],
    subjects: []
  }
  cs_4 = {
    index: [],
    subjects: []
  };
  is_4 = {
    index: [],
    subjects: []
  };
  se_4 = {
    index: [],
    subjects: []
  };
  op_4 = {
    index: [],
    subjects: []
  }

  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    this.saveSubjects();
  }

  prevStep() {
    this.step--;
  }

  //use enter key
  onAdd(columns) {
    this.index++;
    columns.push(this.index);
  }

  onRemove(columns) {
    this.index--;
    columns.pop();
  }

  addSubject(val, col) {
    this.onAdd(col.index);
    col.subjects.push(val);
  }

  saveSubjects() {
    let subjects = {
      year1: {
        cs: this.cs_1.subjects,
        is: this.is_1.subjects,
      },
      year2: {
        cs: this.cs_2.subjects,
        is: this.is_2.subjects,
      },
      year3: {
        cs: this.cs_3.subjects,
        is: this.is_3.subjects,
        se: this.se_3.subjects,
        optional: this.op_3.subjects
      },
      year4: {
        cs: this.cs_4.subjects,
        is: this.is_4.subjects,
        se: this.se_4.subjects,
        optional: this.op_4.subjects
      }
    }
    return subjects;
  }
}
