import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public newsfeed : String[];
  constructor(private dataService : DataService) { }

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

  //edit news on newsfeed
  onEdit(news){

  }

  //delete news
  onDelete(newsid){

  }
}
