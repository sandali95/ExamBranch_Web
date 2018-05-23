import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isPopedOpen : boolean = false;

  constructor( private dialog : MatDialog, private userService : UserService,
  private router : Router, public snackBar : MatSnackBar) { }

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

}
