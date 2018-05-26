import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm : FormGroup;
  year : String ;
  checked : false;
  sub:String[] =[];
  constructor(private dialogeRef : MatDialogRef<RegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
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
      data =>{console.log(data)}//what happend?
    );
  }

  subjectSelection(){
    if(this.year == "3"){
      this.data.subjects = this.data.year3;
      return true;
    }else if(this.year == "4"){
      this.data.subjects = this.data.year4;
      return true;
    }
    
    
  }

  checkbox(event,subject){
    if(event.checked){
      this.sub.push(subject);
    }
  }

}