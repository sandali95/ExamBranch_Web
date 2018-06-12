import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/service/services/user.service';
import { DataService } from '../../../shared/service/services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  year: String = '1';
  field: String = 'cs';
  checked: false;
  sub: String[] = [];
  constructor(private dialogeRef: MatDialogRef<RegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private dataService: DataService, private userService: UserService, public snackbar : MatSnackBar) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      field: [''],
      indexno: [{value :this.data.user.indexno, disabled : true}],
      regno: [{value :this.data.user.regno, disabled : true}],
      name: [''],
      contact: ['',[Validators.required,Validators.minLength(10)]],
      email: ['',Validators.required],
      year: [''],
      subjects: ['']
    });
  }

  onCancel() {
    this.dialogeRef.close();
  }

  onRegister(registrationForm) {
    let form = {
      userid  : this.userService.getUser().userid,
      id      : this.data.id,
      exam    : this.data.title,
      indexno : this.registrationForm.value.indexno,
      registration : this.registrationForm.value.regno,
      fullname: this.registrationForm.value.name,
      email   : this.registrationForm.value.email,
      year    : this.registrationForm.value.year,
      field   : this.registrationForm.value.field,
      subjects: this.getAllSubjects(),
      type    : 'undergraduate'
    };
    this.registrationForm.reset();
    this.dataService.registration(form).subscribe(
      data => { 
        if(data.success){
          this.snackbar.open('Successfully Registered','',{duration: 2000,});
        }
       }//what happend?
    );
  }

  getAllSubjects() {
    if (this.year == "1" && this.field == "cs") {
      this.sub = this.data.year1.cs;
    } else if (this.year == "1" && this.field == "is") {
      this.sub = this.data.year1.is;
    } else if (this.year == "2" && this.field == "cs") {
      this.sub = this.data.year2.cs;
    } else if (this.year == "2" && this.field == "is") {
      this.sub = this.data.year2.is;
    } else if (this.year == "3" && this.field == "cs") {
      this.sub = this.sub.concat(this.data.year3.cs);
    } else if (this.year == "3" && this.field == "is") {
      this.sub = this.sub.concat(this.data.year3.is);
    } else if (this.year == "3" && this.field == "se") {
      this.sub = this.sub.concat(this.data.year3.se);
    } else if (this.year == "4" && this.field == "cs") {
      this.sub = this.sub.concat(this.data.year4.cs);
    }else if (this.year == "4" && this.field == "is") {
      this.sub = this.sub.concat(this.data.year4.is);
    }else if (this.year == "4" && this.field == "se") {
      this.sub = this.sub.concat(this.data.year4.se);
    }
    return this.sub;
  }

  subjectSelection() {
    if (this.year == "3") {
      this.data.subjects = this.data.year3.optional;
      return true;
    } else if (this.year == "4") {
      this.data.subjects = this.data.year4.optional;
      return true;
    }
  }

  checkbox(event, subject) {
    if (event.checked) {
      this.sub.push(subject);
    }
  }

}
