import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../shared/services/user.service';
import { MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup
  
  constructor(private fb : FormBuilder , private dialogeRef : MatDialogRef<LoginComponent>,
    private userService : UserService , @Inject(MAT_DIALOG_DATA) public data: any, 
    public snackBar: MatSnackBar, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email    : ['' , Validators.required],
      password : ['', Validators.required]
    });
  }

  onCancel(){
    this.dialogeRef.close();
  }

  onSubmit(form){
    const user = {
      email:form.value.email,
      password:form.value.password
    };
    this.userService.authenticate(user).subscribe(
      data => {
      if(data.success){
        this.userService.storeUser(data.token);
        this.snackBar.open('Logged In!', '', {duration: 2000,});
        this.dialogeRef.close();
        this.router.navigate['/dashboard'];
      }else{
        //error in login
      }       
      }
    );
  }


}
