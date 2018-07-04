import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from '../../../shared/service/services/data.service';
import { ViewSubjectsComponent } from '../view-subjects/view-subjects.component';
import { ViewRegistrationsComponent } from '../view-registrations/view-registrations.component';
import { ReportGeneratorComponent } from '../report-generator/report-generator.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  displayedColumns = ['exam', 'subjects', 'registrations', 'repeat', 'report'];
  dataSource;

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }

  sortRegistrations(element){
        //sort registrations
    
  }

  getData() {
    this.dataService.getAllExams().subscribe(
      data => {
       this.dataSource = data.data;
      }
    );
  }

  viewSubjects(element) {
    let dialogRef = this.dialog.open(ViewSubjectsComponent, {
      width: '800px',
      data: { subjects: element }
    });
  }

  viewRegistrations(element) {
    let year1 = {cs:[],is:[],se:[]}; let year2 = {cs:[],is:[],se:[]}; let year3 = {cs:[],is:[],se:[]}; let year4 = {cs:[],is:[],se:[]};
    element.forEach(element => {
      if (element.year == 1) {
        if(element.field == 'cs'){
          year1.cs.push(element);
        }else if(element.field == 'is'){
          year1.is.push(element);
        }else{
          year1.se.push(element);
        }
      } else if (element.year == 2) {
        if(element.field == 'cs'){
          year2.cs.push(element);
        }else if(element.field == 'is'){
          year2.is.push(element);
        }else{
          year2.se.push(element);
        }
      } else if (element.year == 3) {
        if(element.field == 'cs'){
          year3.cs.push(element);
        }else if(element.field == 'is'){
          year3.is.push(element);
        }else{
          year3.se.push(element);
        }
      } else {
        if(element.field == 'cs'){
          year4.cs.push(element);
        }else if(element.field == 'is'){
          year4.is.push(element);
        }else{
          year4.se.push(element);
        }
      }
    });
    let dialogRef = this.dialog.open(ViewRegistrationsComponent, {
      width: '800px',
      data: { 
        year1 : year1,
        year2 : year2,
        year3 : year3,
        year4 : year4
       }
    });
  }

  viewRepeaters(element) {
    
  }

  viewReport(element){
    let year1 = {cs:[],is:[],se:[]}; let year2 = {cs:[],is:[],se:[]}; let year3 = {cs:[],is:[],se:[]}; let year4 = {cs:[],is:[],se:[]};
    element.registrations.forEach(element => {
      if (element.year == 1) {
        if(element.field == 'cs'){
          year1.cs.push(element);
        }else if(element.field == 'is'){
          year1.is.push(element);
        }else{
          year1.se.push(element);
        }
      } else if (element.year == 2) {
        if(element.field == 'cs'){
          year2.cs.push(element);
        }else if(element.field == 'is'){
          year2.is.push(element);
        }else{
          year2.se.push(element);
        }
      } else if (element.year == 3) {
        if(element.field == 'cs'){
          year3.cs.push(element);
        }else if(element.field == 'is'){
          year3.is.push(element);
        }else{
          year3.se.push(element);
        }
      } else {
        if(element.field == 'cs'){
          year4.cs.push(element);
        }else if(element.field == 'is'){
          year4.is.push(element);
        }else{
          year4.se.push(element);
        }
      }
    });
    let dialogRef = this.dialog.open(ReportGeneratorComponent, {
      width: '800px',
      data : {
        exam : element,
        year1 : year1,
        year2 : year2,
        year3 : year3,
        year4 : year4
      }
    });
  }

}

