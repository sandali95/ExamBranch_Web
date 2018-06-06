import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AdminService {
  public test : String;
  public loggedAsAdmin :boolean = false;

  constructor(private http : HttpClient) { }

  authenticate(user){
    let headers = new HttpHeaders();
    headers =headers.set('content-type','application/json');
    return this.http.post<any>('http://localhost:3000/users/login',user,{headers:headers});
  }

  isLoggedIn(){
    if(localStorage.getItem('token') == null){
     return false;
    }else{
     return true;
    } 
   }
 
   logOut(){
    this.loggedAsAdmin = false;
    localStorage.clear();
   }
 
   storeUser(token){
     this.loggedAsAdmin = true;
     localStorage.setItem('token',token);
   }

  //post news tthe database so that it can be displayed in the newsfeed
  postNews(news){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return this.http.post<any>('http://localhost:3000/savenews',news,{headers:headers});
  }

  postExam(exam){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return this.http.post<any>('http://localhost:3000/exams/save',exam,{headers:headers});
  }

  deleteNews(newsid){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    let params = new HttpParams();
    params = params.append('newsid',newsid);
    return this.http.get<any>('http://localhost:3000/deletenews',{headers:headers, params:params});
  }



}
