import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectsComponent } from '../subjects/subjects.component'
import { AdminService } from '../../../shared/service/services/admin.service';

@Component({
  selector: 'app-exam-registartion',
  templateUrl: './exam-registartion.component.html',
  styleUrls: ['./exam-registartion.component.css']
})
export class ExamRegistartionComponent implements OnInit {

  public initTab: FormGroup;
  public examinationTab: FormGroup;
  examId: String;
  studenttype: String;
  disabled: boolean = true;

  exams = [];

  constructor(private dataService: DataService, private adminService: AdminService, public fb: FormBuilder) { }

  ngOnInit() {
    this.initTab = this.fb.group({
      heading: ['', Validators.required],
      content: ['', Validators.required],
      examid: ['', Validators.required],
      studenttype: ['', Validators.required]
    });

    this.examinationTab = this.fb.group({
      examname: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.examIds();
  }

  examIds() {
    this.dataService.getAllExams().subscribe(
      data => { this.exams = data.data }
    )
  }

  newExam(examId) {
    if (examId == "0") {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
    console.log(this.disabled);
  }

  //confirm registartion
  onConfirm() {
    let post = {
      title: this.initTab.value.heading,
      content: this.initTab.value.content,
      examid: this.initTab.value.examid,
      studenttype: this.initTab.value.studenttype
    };

    if(this.disabled){
      this.adminService.postNews(post).subscribe(   //post news
        data=>{console.log(data);}
      ); 
    }else{
      console.log(this.dataService.getSubjects());
      let exam = {
        exam: this.examinationTab.value.examname,
        date: this.examinationTab.value.date,
        subjects: this.dataService.getSubjects()
      }
      this.adminService.postExam(exam).subscribe(
        data=>{console.log(data);}
      )
    } 
  }

  //save post
  onSave() {
    console.log(this.initTab.value);
  }

  onSaveExam() {

  }

}
