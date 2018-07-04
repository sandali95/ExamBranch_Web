import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AdminService } from './admin.service';

@Injectable()
export class AdminGuard implements CanActivate,CanActivateChild{

  constructor(private adminService : AdminService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.adminService.loggedAsAdmin()){
      this.adminService.loggedIn = true;
      return true;
    }else{
      this.adminService.loggedIn = false;
      return false;
    }
  }

  canActivateChild(){
    if(this.adminService.loggedAsAdmin()){
      this.adminService.loggedIn = true;
      return true;
    }else{
      this.adminService.loggedIn = false;
      return false;
    }
  }

}
