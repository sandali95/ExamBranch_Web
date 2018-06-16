import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../shared/service/services/user.service';
import { MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/service/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup
  
  constructor(private fb : FormBuilder , private dialogeRef : MatDialogRef<LoginComponent>,
    private userService : UserService , @Inject(MAT_DIALOG_DATA) public data: any, 
    public snackBar: MatSnackBar, private router : Router, private adminService : AdminService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      regno    : ['' , Validators.required],
      password : ['', Validators.required]
    });
  }

  onCancel(){
    this.dialogeRef.close();
  }

  onSubmit(form){
    const user = {
      regno    :form.value.regno,
      password :form.value.password
    };
    this.userService.authenticate(user).subscribe(
      data => {
      if(data.success){
        this.dialogeRef.close();
        this.userService.storeUser(data.token,JSON.stringify(data.user));
        this.router.navigate(['/user/dashboard']);
        this.snackBar.open('Logged In!', '', {duration: 2000,});
      }else{
        this.loginForm.reset();
        this.snackBar.open('Invalid Credentials!', '', {duration: 2000,});
      }       
      }
    );
  }


}
