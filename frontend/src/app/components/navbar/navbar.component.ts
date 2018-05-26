import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../../shared/service/services/user.service';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/service/services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isPopedOpen : boolean = false;

  constructor( private dialog : MatDialog, private userService : UserService,
  private router : Router, public snackBar : MatSnackBar, private admin : AdminService) { }

  ngOnInit() {

  }

  onLogin(){
    this.isPopedOpen = true ; 
    const dialogRef = this.dialog.open(LoginComponent, {
      width : '400px',
      data : {}
    });

    dialogRef.afterClosed().subscribe(
      result =>{
        this.isPopedOpen = false;
      });
  }

  onLogout(){
    this.userService.logOut();
    this.snackBar.open('Logged Out!','',{duration:1000});
    this.router.navigate(['/dashboard']);
  }

  onlogout(){
    this.admin.isLoggedIn = false;
    this.admin.loggedAsAdmin = false;
    this.snackBar.open('LoggedOut !','',{duration : 2000});
    this.router.navigate(['']);
  }

}
