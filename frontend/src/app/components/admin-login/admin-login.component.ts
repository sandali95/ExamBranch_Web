import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AdminService } from '../../shared/service/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public adminlogin: FormGroup;
  constructor(private adminService: AdminService, private fb: FormBuilder,
    private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.adminService.loggedAsAdmin = true;
    this.adminlogin = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit(form) {
    let user = {
      email: form.value.username,
      password: form.value.password
    }
    this.adminService.authenticate(user).subscribe(
      data => {
        if (data.success) {
          this.adminService.storeUser(data.token);
          this.router.navigate(['/admin/newsfeed']);
          this.snackbar.open('Logged In!', '', { duration: 2000, });
        } else {
          this.adminlogin.reset();
          this.snackbar.open('Invalida Credentials!', '', { duration: 2000, });
        }
      }
    );
  }
}

