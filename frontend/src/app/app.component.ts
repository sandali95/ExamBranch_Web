import { Component } from '@angular/core';
import { UserService } from './shared/service/services/user.service';
import { AdminService } from './shared/service/services/admin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private adminService: AdminService){}

  title = 'UCSC Exam Branch';
  
  
  ngOnInit() {
    if(localStorage.length>0){
      this.userService.loggedIn = true;
    }else{
      this.userService.loggedIn = false;
    }
  }

}
