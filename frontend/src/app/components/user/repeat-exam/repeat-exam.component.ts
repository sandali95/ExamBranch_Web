import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-repeat-exam',
  templateUrl: './repeat-exam.component.html',
  styleUrls: ['./repeat-exam.component.css']
})
export class RepeatExamComponent implements OnInit {

  public registrationForm : FormGroup;
  year : String ;
  checked : false;
  sub:String[] =[];
  constructor(private dialogeRef : MatDialogRef<RepeatExamComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private fb : FormBuilder, private dataService : DataService ) { }


  ngOnInit() {
    this.registrationForm = this.fb.group({
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

  onRegister(registrationForm){
    let form ={
      id : this.data.id,
      indexno : this.registrationForm.value.indexno,
      registration : this.registrationForm.value.regno,
      fullname : this.registrationForm.value.name,
      email :this.registrationForm.value.email,
      year : this.registrationForm.value.year,
      subjects : this.sub
    };
    this.dataService.registration(form).subscribe(
      data =>{console.log(data)}
    );
  }

  subjectSelection(){
    if(this.year == "3"){
      this.data.subjects = this.data.year3;
    }else if(this.year == "4"){
      this.data.subjects = this.data.year4;
    }else if(this.year == "1"){
      this.data.subjects = this.data.year1;
    }else{
      this.data.subjects = this.data.year2;
    }
    return true;       
  }

  checkbox(event,subject){
    if(event.checked){
      this.sub.push(subject);
    }
  }


}
