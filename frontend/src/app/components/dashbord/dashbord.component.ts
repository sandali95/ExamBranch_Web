import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserService } from '../../shared/services/user.service';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private dialoge : MatDialog, private userService : UserService,
  public snackBar : MatSnackBar) { }

  ngOnInit() {
  }

  onRegister(news){
    this.dialoge.open(RegistrationComponent ,{
      width : '1000px',
      data  : {
        title : 'First Semester Exams 2018',
      } //send userdetails for auto completion
    });

  }

}
