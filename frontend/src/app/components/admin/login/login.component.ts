import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/service/services/admin.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { resolve } from 'path';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public adminlogin : FormGroup;
  constructor(private adminService : AdminService, private fb : FormBuilder,
  private router : Router, public snackbar : MatSnackBar) { }

  ngOnInit() {  
    this.adminlogin = this.fb.group({
      username:[''],
      password : ['']
    });
  }

  onSubmit(form){
    let value = this.adminService.onLogin(form.value);
    if(value){
      console.log(value);
      this.router.navigate(['/admin/newsfeed']);
    }
  }
  onlogout(){
    this.adminService.loggedAsAdmin = false;
  }

}
