import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AdminService {
  public test: String;
  loggedIn : boolean;
  
  constructor(private http: HttpClient) { }

  authenticate(user) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post<any>('http://localhost:3000/admin/login', user, { headers: headers });
  }

  loggedAsAdmin() {
    if (localStorage.getItem('token') == null) {
      return false;
    } else {
      let token = localStorage.getItem('token');
      let admin = token.split(' ', 2);
      if (admin[0] == 'Admin') {
        return true
      } else {
        return false;
      }
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('token') == null) {
      return false;
    } else {
      return true;
    }
  }

  logOut() {
    localStorage.clear();
  }

  storeUser(token) {
    localStorage.setItem('token', token);
  }

  //post news tthe database so that it can be displayed in the newsfeed
  postNews(news) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post<any>('http://localhost:3000/savenews', news, { headers: headers });
  }

  postExam(exam) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post<any>('http://localhost:3000/exams/save', exam, { headers: headers });
  }

  deleteNews(newsid) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    let params = new HttpParams();
    params = params.append('newsid', newsid);
    return this.http.get<any>('http://localhost:3000/deletenews', { headers: headers, params: params });
  }



}
