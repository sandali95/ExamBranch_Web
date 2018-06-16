import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  tiles = [
    {text: 'One', cols: 4, rows: 2, color: 'secondary'},
    {text: 'Three', cols: 2, rows: 4, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 4, color: '#DDBDF1'},
  ];

  ngOnInit() {
  }

}
