import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { ExamstableComponent } from './examstable/examstable.component';
import { DashbordComponent } from './dashbord/dashbord.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent, 
    ExamstableComponent,
    DashbordComponent
  ]
})
export class UserModule { }
