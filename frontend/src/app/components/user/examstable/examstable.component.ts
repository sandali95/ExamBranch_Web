import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/service/services/data.service';
import { UserService } from '../../../shared/service/services/user.service';

@Component({
  selector: 'app-examstable',
  templateUrl: './examstable.component.html',
  styleUrls: ['./examstable.component.css']
})
export class ExamstableComponent implements OnInit {

  displayedColumns = ['exam', 'subjects'];
  dataSource ;
  user:any;
  
  constructor(private dataService: DataService,private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.getData();
    
  }

  getData(){
    this.dataService.getRegisteredExams(this.user.userid).subscribe(
      data=>{ 
        console.log(data.registrations);this.dataSource = data.registrations}
    );
  }

}
export interface Element {
  exam: string;
  subjects: [string];
}



