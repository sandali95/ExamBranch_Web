import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogeRef : MatDialogRef<ViewSubjectsComponent>) { }

  ELEMENT_DATA = [
    {year:'1 Year',cs:this.data.subjects.year1.cs, is:this.data.subjects.year1.is, se:this.data.subjects.year1.se},
    {year:'2 Year',cs:this.data.subjects.year2.cs, is:this.data.subjects.year2.is, se:this.data.subjects.year2.se},
    {year:'3 Year',cs:this.data.subjects.year3.cs, is:this.data.subjects.year3.is, se:this.data.subjects.year3.se},
    {year:'4 Year',cs:this.data.subjects.year4.cs, is:this.data.subjects.year4.is, se:this.data.subjects.year4.se}
  ];
  displayedColumns = ['year','cs', 'is', 'se'];
  dataSource = this.ELEMENT_DATA;

  ngOnInit() {
    console.log(this.dataSource)
  }

  onCancel(){
    this.dialogeRef.close();
  }

}


