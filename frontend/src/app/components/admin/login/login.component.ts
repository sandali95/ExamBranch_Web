import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/service/services/admin.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public adminlogin : FormGroup;
  constructor(private adminService : AdminService, private fb : FormBuilder,
  private router : Router, public snackbar : MatSnackBar) { }

  ngOnInit() {  
    this.adminService.loggedAsAdmin = true;
    this.adminlogin = this.fb.group({
      username:[''],
      password : ['']
    });
  }

  // onSubmit(form){
  //   let value = this.adminService.onLogin(form.value);
  //   if(value){
  //     this.adminService.isLoggedIn = true;
  //     this.router.navigate(['/admin/newsfeed']);
  //     this.snackbar.open('Logged In','',{duration : 1000});
  //   }
  // }

  

}
