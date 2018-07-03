import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatFileUploadModule } from 'angular-material-fileupload';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamRegistartionComponent } from './exam-registartion/exam-registartion.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';
import { ViewRegistrationsComponent } from './view-registrations/view-registrations.component';
import { ReportGeneratorComponent } from './report-generator/report-generator.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatFileUploadModule
  ],
  declarations: [
    DashboardComponent,
    ExamRegistartionComponent,
    SidenavComponent,
    SubjectsComponent,
    ProfileComponent,
    ViewSubjectsComponent,
    ViewRegistrationsComponent,
    ReportGeneratorComponent,
  ],
  entryComponents:[ViewSubjectsComponent, ViewRegistrationsComponent, ReportGeneratorComponent]
})
export class AdminModule { }
