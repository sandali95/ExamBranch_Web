import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../shared/services/user.service';
import { inject } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup
  
  constructor(private fb : FormBuilder , private dialogeRef : MatDialogRef<LoginComponent>,
    private userService : UserService , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email    : ['' , Validators.required],
      password : ['', Validators.required]
    });
  }

  onCancel(){
    this.dialogeRef.close();
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

}
