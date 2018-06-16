import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthGuard } from './shared/service/services/auth.guard';
import { AdminGuard } from './shared/service/services/admin.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes : Routes = [
  {
    path      : 'login',
    component : LoginComponent
  },
  {
    path         : 'user',
    loadChildren : 'app/components/user/user.module#UserModule',
    canActivate  : [AuthGuard]

  },
  {
    path     : 'admin',
    component : AdminLoginComponent
  },
  {
    path         : 'admin',
    loadChildren : 'app/components/admin/admin.module#AdminModule',
    canActivateChild : [AdminGuard]
  },
  {
    path       : '',
    component : HomeComponent,
    redirectTo : '',
    pathMatch  : 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
