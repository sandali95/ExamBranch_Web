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
    if(this.adminService.isLoggedIn){
      return true;
    }else{
      return false;
    }
  }

  canActivateChild(){
    if(this.adminService.isLoggedIn){
      return true;
    }else{
      return false;
    }
  }

}
