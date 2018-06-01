import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/services/data.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { SubjectsComponent } from '../subjects/subjects.component'

@Component({
  selector: 'app-exam-registartion',
  templateUrl: './exam-registartion.component.html',
  styleUrls: ['./exam-registartion.component.css']
})
export class ExamRegistartionComponent implements OnInit {

  public initTab : FormGroup;
  public examinationTab : FormGroup;
  selected : String;
  disabled : boolean =true;

  exams = [];

  constructor(private dataService : DataService, public fb : FormBuilder) { }

  ngOnInit() {
    this.initTab = this.fb.group({
      heading : ['',Validators.required],
      content : ['', Validators.required],
      examid  : ['',Validators.required]
    });

    this.examinationTab = this.fb.group({
      examname : ['',Validators.required],
      date     : ['',Validators.required]
    });

    this.examIds();
  }

  examIds(){
    this.dataService.getAllExams().subscribe(
      data => { this.exams = data.data}
    )
  }

  newExam(selected){
    if(selected == "0"){
      this.disabled = false;
    }else{
      this.disabled = true;
    }
  }

  //confirm registartion
  onConfirm(){
    let exam = {
      exam : this.examinationTab.value.examname,
      date : this.examinationTab.value.date,
      subjects : this.dataService.getSubjects()
    }
    console.log(exam);
  }

  onSave(){
    console.log(this.initTab);
  }

  onSaveExam(){

  }

}
