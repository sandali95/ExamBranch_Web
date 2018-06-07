import { Component } from '@angular/core';
import { AdminService } from './shared/service/services/admin.service';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private admin : AdminService, private observableMedia: ObservableMedia){}

  title = 'UCSC Exam Branch';

}
