import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm : FormGroup;

  constructor(private dialogeRef : MatDialogRef<RegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private fb : FormBuilder, private dataService : DataService ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({

    });
  }

  onCancel(){
    this.dialogeRef.close();
  }

  onRegister(){

  }

  subjectSelection(){
    return true;
  }

}
