import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-registrations',
  templateUrl: './view-registrations.component.html',
  styleUrls: ['./view-registrations.component.css']
})
export class ViewRegistrationsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogeRef : MatDialogRef<ViewRegistrationsComponent>) { }

  ELEMENT_DATA = [
    {year:'1 Year',cs:this.data.year1.cs, is:this.data.year1.is, se:this.data.year1.se},
    {year:'2 Year',cs:this.data.year2.cs, is:this.data.year2.is, se:this.data.year2.se},
    {year:'3 Year',cs:this.data.year3.cs, is:this.data.year3.is, se:this.data.year3.se},
    {year:'4 Year',cs:this.data.year4.cs, is:this.data.year4.is, se:this.data.year4.se}
  ];
  displayedColumns = ['year','cs', 'is', 'se'];
  dataSource = this.ELEMENT_DATA;

  ngOnInit() {
    console.log(this.dataSource);
  }

  onCancel(){
    this.dialogeRef.close();
  }

}
