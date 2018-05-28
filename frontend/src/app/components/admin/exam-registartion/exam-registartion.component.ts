import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-registartion',
  templateUrl: './exam-registartion.component.html',
  styleUrls: ['./exam-registartion.component.css']
})
export class ExamRegistartionComponent implements OnInit {

  selected : String;
  disabled : boolean =true;
  addSubjects_1 : boolean = false;

  exams = [
    {id: 'steak-0', title: 'Steak'},
    {id: 'pizza-1', title: 'Pizza'},
    {id: 'tacos-2', title: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

  addSubject(){
    console.log("click");
    this.addSubjects_1 = true;
  }

  newExam(selected){
    if(selected == "0"){
      this.disabled = false;
    }
    

  }

  onRegister(){
    //check whether he has add subjects to all years
    if(this.addSubjects_1){
      //error
    }
  }

}
