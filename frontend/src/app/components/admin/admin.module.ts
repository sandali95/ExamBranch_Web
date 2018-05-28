import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamRegistartionComponent } from './exam-registartion/exam-registartion.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    ExamRegistartionComponent,
    SidenavComponent,
    SubjectsComponent
  ]
})
export class AdminModule { }
