import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
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
  field : String = 'cs';
  year  : String = '1';
  checked : false;
  sub:String[] =[];
  constructor(private dialogeRef : MatDialogRef<RepeatExamComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private fb : FormBuilder, private dataService : DataService, private userService:UserService, public snackbar:MatSnackBar ) { }


  ngOnInit() {
    this.repeatExamForm = this.fb.group({
      field     : [''],
      index     : [{value :this.data.user.indexno, disabled : true}],
      regno     : [{value :this.data.user.regno, disabled : true}],
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
      userid  : this.userService.getUser().userid,
      id      : this.data.id,
      exam    : this.data.title,
      indexno : this.repeatExamForm.value.indexno,
      registration : this.repeatExamForm.value.regno,
      fullname: this.repeatExamForm.value.name,
      email   : this.repeatExamForm.value.email,
      year    : this.repeatExamForm.value.year,
      field   : this.repeatExamForm.value.field,
      subjects: this.sub,
      type    : 'repeat'//whether this is a repeat exam or not
    };
    this.dataService.registration(form).subscribe(
      data =>{
        if(data.success){
          this.snackbar.open('Successfully Registered','',{duration: 2000,});
        }
      }
    );
  }

  subjectSelection(){
   if(this.year == "1"){
     if(this.field == "cs"){
       this.data.subjects = this.data.year1.cs;
       return true;
     }else if(this.field == "is"){
       this.data.subjects = this.data.year1.is;
       return true;
     }
   }else if(this.year == "2"){
    if(this.field == "cs"){
      this.data.subjects = this.data.year2.cs;
      return true;
    }else if(this.field == "is"){
      this.data.subjects = this.data.year2.is;
      return true;
    }
   }else if(this.year == "3"){
    if(this.field == "cs"){
      this.data.subjects = this.data.year3.cs.concat(this.data.year3.optional);
      return true;
    }else if(this.field == "is"){
      this.data.subjects = this.data.year3.is.concat(this.data.year3.optional);
      return true;
    }else if(this.field == "se"){
      this.data.subjects = this.data.year3.se.concat(this.data.year3.optional);
      return true;
    }
   }else if(this.year == "4"){
    if(this.field == "cs"){
      this.data.subjects = this.data.year4.cs.concat(this.data.year3.optional);
      return true;
    }else if(this.field == "is"){
      this.data.subjects = this.data.year4.is.concat(this.data.year3.optional);
      return true;
    }else if(this.field == "se"){
      this.data.subjects = this.data.year4.se.concat(this.data.year3.optional);
      return true;
    }
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
