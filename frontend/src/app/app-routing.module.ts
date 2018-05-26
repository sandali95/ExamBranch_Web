import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';


const routes : Routes = [
  {
    path      : 'login',
    component : LoginComponent
  },
  {
    path      : 'dashboard',
    component : DashbordComponent
  },
  {
    path         : 'user',
    loadChildren : 'app/components/user/user.module#UserModule'
  },
  {
    path         : 'admin',
    loadChildren : 'app/components/admin/admin.module#AdminModule'
  },
  // {
  //   path       : '',
  //   redirectTo : '',
  //   pathMatch  : 'full'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
