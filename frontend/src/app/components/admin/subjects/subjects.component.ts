import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  step = 0;
  index =0;
  cs_1 ={
    index:[],
    subjects :[]
  };
  is_1 ={
    index:[],
    subjects :[]
  } ;
   cs_2 = {
    index:[],
    subjects :[]
   }; 
   is_2 = {
    index:[],
    subjects :[]
   };
    cs_3 ={
      index:[],
    subjects :[]
    }; is_3 = {
      index:[],
      subjects :[]
    }; se_3 = {
      index:[],
      subjects :[]
    }; 
  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onAdd(columns){
    this.index++;
    columns.push(this.index);
    console.log(this.cs_1);
  }

  onRemove(columns){
    this.index--;
    columns.pop();
  }

  addSubject(val,col){
    this.onAdd(col.index);
    col.subjects.push(val);
    console.log(this.cs_1);
  }
}
