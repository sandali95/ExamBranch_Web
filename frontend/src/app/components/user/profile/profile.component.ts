import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/service/services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../../../shared/service/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public edit: boolean = true;
  public profileform : FormGroup;
  user : any;
  exams : any;

  constructor(private userService : UserService, public snackBar : MatSnackBar,
  private router : Router, private fb : FormBuilder, private dataService : DataService) { }

  ngOnInit() {
    this.onProfile();
    this.profileform = this.fb.group({
      username : [{value:this.user.username,disabled:this.edit},Validators.required],
      regno    : [{value:this.user.regno,disabled:this.edit},Validators.required],
      indexno  : [{value:this.user.indexno,disabled:this.edit},Validators.required],
      email    : [{value:this.user.email,disabled:this.edit},Validators.required],
      field    : [{value:this.user.field,disabled:this.edit},Validators.required]
    });
  }

  onProfile(){
    this.user = this.userService.getUser();
  }

  onEdit(){
    this.profileform.controls['username'].enable();
    this.profileform.controls['regno'].enable();
    this.profileform.controls['indexno'].enable();
    this.profileform.controls['email'].enable();
    this.profileform.controls['field'].enable();
  }


  onSave(){
    this.profileform.controls['username'].disable()
    this.profileform.controls['regno'].disable();
    this.profileform.controls['indexno'].disable();
    this.profileform.controls['email'].disable();
    this.profileform.controls['field'].disable();

    console.log(this.profileform.value);
  }

}
