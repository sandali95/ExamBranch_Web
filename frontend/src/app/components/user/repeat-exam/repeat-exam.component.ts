import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/service/services/user.service';
import { DataService } from '../../../shared/service/services/data.service';

@Component({
  selector: 'app-repeat-exam',
  templateUrl: './repeat-exam.component.html',
  styleUrls: ['./repeat-exam.component.css']
})
export class RepeatExamComponent implements OnInit {

  public repeatExamForm : FormGroup;
  year : String ;
  checked : false;
  sub:String[] =[];
  constructor(private dialogeRef : MatDialogRef<RepeatExamComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private fb : FormBuilder, private dataService : DataService ) { }


  ngOnInit() {
    this.repeatExamForm = this.fb.group({
      field     : [''],
      index     : [''],
      regno     : [''],
      name      : [''],
      contact   : [''],
      email     : [''],
      year      : [''],
      subjects  : ['']
    });
  }

  onCancel(){
    this.dialogeRef.close();
  }

  onRegister(repeatExamForm){
    let form ={
      id : this.data.id,
      indexno : this.repeatExamForm.value.indexno,
      registration : this.repeatExamForm.value.regno,
      fullname : this.repeatExamForm.value.name,
      email :this.repeatExamForm.value.email,
      year : this.repeatExamForm.value.year,
      subjects : this.sub
    };
    this.dataService.registration(form).subscribe(
      data =>{console.log(data)}
    );
  }

  subjectSelection(){
    if(this.year == "3"){
      this.data.subjects = this.data.year3
      return true;       
    }else if(this.year == "4"){
      this.data.subjects = this.data.year4;
      return true;       
    }else if(this.year == "1"){
      this.data.subjects = this.data.year1;
      return true;       
    }else if(this.year == "2"){
      this.data.subjects = this.data.year2;
      return true;       
    }else{
      return false;
    }
  }

  checkbox(event,subject){
    if(event.checked){
      this.sub.push(subject);
    }
  }


}
