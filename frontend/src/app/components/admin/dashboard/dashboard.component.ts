import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/services/data.service';
import { AdminService } from '../../../shared/service/services/admin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public newsfeed : String[];
  constructor(private dataService : DataService, private adminService : AdminService, public snackbar : MatSnackBar) { }

  ngOnInit() {
    this.getAllNews();
    console.log(this.newsfeed);
  }


  //get all news to the dashboard
  getAllNews(){
    this.dataService.getAllNews().subscribe(
      data =>{
        if(data.success){
          this.newsfeed = data.news;
          console.log(this.newsfeed);
        }
      }
    );
  }

  //delete news
  onDelete(newsid){
    this.adminService.deleteNews(newsid).subscribe(
      data => {
        if(data.success){
          //notify deleted

        }else{
          //notify error
        }
      }
    );
  }
}
