import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RegistrationComponent } from '../user/registration/registration.component';
import { DataService } from '../../shared/services/data.service';
import { RepeatExamComponent } from '../user/repeat-exam/repeat-exam.component';

export interface subjects{}
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  newsfeed : String[] ;
  constructor(private dialoge : MatDialog, private dataService : DataService,
  public snackBar : MatSnackBar) { }

  ngOnInit() {
    this.getAllNews();
  }

  onRegister(news){

    //should check whether the student is udergraduate or postgraduate
    if(news.student == 'undergraduate'){
      //get the exam details from examschema
      this.dataService.getExam(news._id).subscribe(
        data=>{
          this.dialoge.open(RegistrationComponent ,{
            width : '1000px',
            data  : {
              id    : data.exam_id,
              title : news.title,
              year3 : data.year3,
              year4 : data.year4,
              subjects :[]
            } //send userdetails for auto completion
          });    
        });
    }else if(news.student == 'repeat'){ // for repeat exam forms
      this.dataService.getExam(news._id).subscribe(
        data=>{
          this.dialoge.open(RepeatExamComponent ,{
            width : '1000px',
            data  : {
              id    : data.exam_id,
              title : news.title,
              year3 : data.year3,
              year4 : data.year4,
              subjects :[]
            } //send userdetails for auto completion
          });    
        });  
    }else{//

    }
    
    
    
  }

  getAllNews(){
    this.dataService.getAllNews().subscribe(
      data =>{
        if(data.success){
          this.newsfeed = data.news;
        }
      }
    );
  }

}
