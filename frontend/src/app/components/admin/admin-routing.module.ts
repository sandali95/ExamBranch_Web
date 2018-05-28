import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamRegistartionComponent } from './exam-registartion/exam-registartion.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'newsfeed',
    component : DashboardComponent
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
