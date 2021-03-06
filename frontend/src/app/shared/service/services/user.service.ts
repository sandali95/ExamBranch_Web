import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface token{
  success : boolean;
  message : String;
  token   : String;
  user    : any;
}

export interface Authorization{
  success : boolean;
  message : String;
  user    : any;
}

@Injectable()
export class UserService {
  user : any;
  loggedIn: boolean;
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

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  storeUser(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',user);
  }

  getProfile(){
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('token');

    headers = headers.set('content-type','application/json');
    headers = headers.set('authorization', authToken);
    return this.http.get<any>('http://localhost:3000/users/profile',{headers:headers});
  }

  updateProfile(profile){
    let user = this.getUser();
    console.log(user.userid);
    profile._id = user.userid;
    let headers = new HttpHeaders();
    headers =headers.set('content-type','application/json');
    return this.http.post<any>('http://localhost:3000/users/update',{user:profile},{headers:headers});
  }

  
}
