import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/services/data.service';
import { AdminService } from '../../../shared/service/services/admin.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public newsfeed : String[];
  constructor(private dataService : DataService, private adminService : AdminService, public snackbar : MatSnackBar,
  public router : Router) { }

  ngOnInit() {
    this.getAllNews();
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
          this.snackbar.open('Successfully deleted news.','',{duration : 2000});
          this.router.navigate(['/admin/newsfeed']);
        }else{
          this.snackbar.open('Error Encountered!.','',{duration : 2000});
        }
      }
    );
  }
}
