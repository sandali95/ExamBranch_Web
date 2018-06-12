import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamRegistartionComponent } from './exam-registartion/exam-registartion.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    DashboardComponent,
    ExamRegistartionComponent,
    SidenavComponent,
    SubjectsComponent,
    ProfileComponent
  ]
})
export class AdminModule { }
