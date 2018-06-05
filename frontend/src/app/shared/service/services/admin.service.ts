import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AdminService {
  public test : String;
  public loggedAsAdmin :boolean = false;
  isLoggedIn : boolean = false;

  constructor(private http : HttpClient) { }

  onLogin(form): boolean{
    if(form.username == 'admin' && form.password == 'admin'){
      this.isLoggedIn = true;
      return true;
    }else{
      return false;
    }
  }

  //post news tthe database so that it can be displayed in the newsfeed
  postNews(news){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return this.http.post<any>('http://localhost:3000/savenews',news,{headers:headers});
  }

  postExam(exam){
    console.log(exam);
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return this.http.post<any>('http://localhost:3000/exams/save',exam,{headers:headers});
  }


}
