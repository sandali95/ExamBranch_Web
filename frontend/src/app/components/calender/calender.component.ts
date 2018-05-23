import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  date:number;
  day :String;
  month : String;
  year : number;

  days = ['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday'];
  months = ['January','February','March','April','May','June','July','August','September',
            'October','November','December'];

  constructor() { }

  ngOnInit() {
    const d = new Date();

    this.date = d.getDate();
    this.day = this.days[d.getDay()];
    this.year = d.getFullYear();
    this.month = `${this.months[d.getMonth()]}  ${this.year}`;



  }

}
