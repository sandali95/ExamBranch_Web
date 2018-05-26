import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  public test : String;
  public loggedAsAdmin :boolean = false;
  isLoggedIn : boolean = false;
  constructor() { }

  onLogin(form): boolean{
    if(form.username == 'admin' && form.password == 'admin'){
      this.isLoggedIn = true;
      return true;
    }else{
      return false;
    }
  }


}
