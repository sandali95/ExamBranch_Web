import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})
export class ReportGeneratorComponent implements OnInit {

  @ViewChild('content', { read: ElementRef }) content: ElementRef
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogeRef : MatDialogRef<ReportGeneratorComponent>) { }

  ngOnInit() {
  }

  download(exam) {
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': (element, renderer) => {
        return true;
      }
    }

    let content = this.content.nativeElement;
    console.log(content);

    doc.fromHTML(content.innerHTML, 15, 15, {
      'elementHandlers': specialElementHandlers
    });
    doc.save(`${exam} Report.pdf`);
  }

  onCancel(){
    this.dialogeRef.close();
  }
  

}

