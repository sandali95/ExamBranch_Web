import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamRegistartionComponent } from './exam-registartion/exam-registartion.component';
import { AdminGuard } from '../../shared/service/services/admin.guard';
import { ProfileComponent } from './profile/profile.component';
import { NewExamComponent } from './new-exam/new-exam.component';

const routes: Routes = [
  // {
  //   path : '',
  //   component : LoginComponent,
  // },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'newsfeed',
    component : DashboardComponent,

  },
  {
    path : 'newExam',
    component : ExamRegistartionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
