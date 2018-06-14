import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-registrations',
  templateUrl: './view-registrations.component.html',
  styleUrls: ['./view-registrations.component.css']
})
export class ViewRegistrationsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogeRef : MatDialogRef<ViewRegistrationsComponent>) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogeRef.close();
  }

}
