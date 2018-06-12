import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  displayedColumns = ['examid','exam', 'date','subjects','registrations','report'];
  dataSource ;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getData();
    
  }

  getData(){
    this.dataService.getAllExams().subscribe(
      data=>{ 
        console.log(data);this.dataSource = data.data}
    );
  }

}

