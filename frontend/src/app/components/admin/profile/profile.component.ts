import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../../../shared/service/services/data.service';
import { ViewSubjectsComponent } from '../view-subjects/view-subjects.component';
import { ViewRegistrationsComponent } from '../view-registrations/view-registrations.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  displayedColumns = ['exam','subjects','registrations','repeat','report'];
  dataSource ;

  constructor(private dataService : DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();   
  }

  getData(){
    this.dataService.getAllExams().subscribe(
      data=>{ 
        console.log(data);this.dataSource = data.data}
    );
  }

  viewSubjects(){
    let dialogRef = this.dialog.open(ViewSubjectsComponent, {
      width : '250px'
    }); 
  }

  viewRegistrations(){
    let dialogRef = this.dialog.open(ViewRegistrationsComponent, {
      width : '250px'
    });
  }

}

