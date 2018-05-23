import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isPopedOpen : boolean = false;
  constructor( private dialog : MatDialog) { }

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

}
