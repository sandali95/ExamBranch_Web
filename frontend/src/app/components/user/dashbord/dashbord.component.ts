import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RegistrationComponent } from '../registration/registration.component';
import { DataService } from '../../../shared/service/services/data.service';
import { RepeatExamComponent } from '../repeat-exam/repeat-exam.component';
import { UserService } from '../../../shared/service/services/user.service';

export interface subjects { }
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  user: any;
  newsfeed: String[];
  constructor(private dialoge: MatDialog, private dataService: DataService, private userService: UserService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllNews();
    this.user = this.userService.getUser();
  }

  onRegister(news) {
    //should check whether the student is undergraduate or postgraduate
    if (news.student == 'undergraduate') {
      //check whether the student is already registered
      this.dataService.checkRegistry(this.user.userid, news.exam_id).subscribe(
        data => {
          if (!data.value) {
            this.snackBar.open('Already Registed for the Exam','',{duration:2000});

          } else {
            //get the exam details from examschema
            this.dataService.getExam(news.exam_id).subscribe(
              data => {
                console.log(data);
                this.dialoge.open(RegistrationComponent, {
                  width: '1000px',
                  data: {
                    user: this.user,
                    id: data.exam_id,
                    title: news.title,
                    year1: data.year1,
                    year2: data.year2,
                    year3: data.year3,
                    year4: data.year4,
                    subjects: []
                  } //send userdetails for auto completion
                });
              });
          }
        });
    } else if (news.student == 'repeat') { // for repeat exam forms
      this.dataService.getExam(news.exam_id).subscribe(
        data => {
          console.log(data);
          this.dialoge.open(RepeatExamComponent, {
            width: '1000px',
            data: {
              user: this.user,
              id: data.exam_id,
              title: news.title,
              subjects: [],
              year1: data.year1,
              year2: data.year2,
              year3: data.year3,
              year4: data.year4
            } //send userdetails for auto completion
          });
        });
    } else {//postgraduate

    }
  }

  getAllNews() {
    this.dataService.getAllNews().subscribe(
      data => {
        if (data.success) {
          this.newsfeed = data.news;
        }
      }
    );
  }

}
