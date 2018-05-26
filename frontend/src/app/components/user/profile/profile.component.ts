import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/service/services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService : UserService, public snackBar : MatSnackBar,
  private router : Router) { }

  ngOnInit() {
    this.onProfile();
  }

  onProfile(){
    this.userService.getProfile().subscribe(
      error => {console.log(error)},
      data => {
        if(data.success){
          this.userService.user = data.user;
        }else{
          console.log(data);
          this.userService.logOut();
          this.snackBar.open('Session Expired ! Please Sign In','',{duration:5000});
          this.router.navigate(['/dashboard']);
        }
      }
      );
  }

}
