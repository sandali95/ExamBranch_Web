import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface news{
  success : boolean;
  message : String;
  news    : any;
}


@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }

  private subjects : any;

  setSubjects(subjects){
    this.subjects = subjects;
  }

  getSubjects(){
    return this.subjects;
  }
  
  getAllNews(){
    let headers = new HttpHeaders();
    headers =headers.set('content-type','application/json');
    return this.http.get<news>('http://localhost:3000/allnews');
  }

  getExam(_id){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    let params = new HttpParams();
    params = params.append('examid',_id);
    return this.http.get<any>('http://localhost:3000/exams/getexamdetails',{headers:headers, params:params});
  }

  //register for an exam
  registration(form){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return this.http.post<any>('http://localhost:3000/exams/register',form,{headers:headers});
  }

  //get All exams in the db
  getAllExams(){
    let headers = new HttpHeaders();
    headers =headers.set('content-type','application/json');
    return this.http.get<any>('http://localhost:3000/exams/getallexams');
  }

  //get all the registered exams for a given student id
  getRegisteredExams(userid){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    let params = new HttpParams();
    params = params.append('userid',userid);
    return this.http.get<any>('http://localhost:3000/users/regsiteredexams',{headers:headers, params:params});
  }

  checkRegistry(userid,examid){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    let params = new HttpParams();
    params = params.append('userid',userid);
    params = params.append('examid',examid);
    return this.http.get<any>('http://localhost:3000/users/checkregistry',{headers:headers, params:params});
  }

}
