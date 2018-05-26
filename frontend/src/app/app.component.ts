import { Component } from '@angular/core';
import { AdminService } from './shared/service/services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private admin : AdminService){}
  title = 'UCSC Exam Branch';
}
