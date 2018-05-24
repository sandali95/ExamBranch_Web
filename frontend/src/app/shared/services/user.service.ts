import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface token{
  success : boolean;
  message : String;
  token   : String;
}

export interface Authorization{
  success : boolean;
  message : String;
  user    : any;
}

@Injectable()
export class UserService {
  user : any;

  constructor(private http : HttpClient) { }

  authenticate(user){
    let headers = new HttpHeaders();
    headers =headers.set('content-type','application/json');
    return this.http.post<token>('http://localhost:3000/users/login',user,{headers:headers});
  }

  isLoggedIn(){
   if(localStorage.getItem('token') == null){
    return false;
   }else{
    return true;
   } 
  }

  logOut(){
    localStorage.clear();
  }

  storeUser(token){
    localStorage.setItem('token',token);
  }

  getProfile(){
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('token');

    headers = headers.set('content-type','application/json');
    headers = headers.set('authorization', authToken);
    return this.http.get<Authorization>('http://localhost:3000/users/authentication',{headers:headers});
  }

  isAuthenticated(){
    this.getProfile().subscribe(
      data => {
        if(data.success){
          return true;
        }else{
          return false;
        }
      }
    );
  }
}
