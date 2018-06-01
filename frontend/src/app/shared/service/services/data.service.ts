import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface news{
  success : boolean;
  message : String;
  news    : any;
}

export interface subjects{
  success : boolean;
  message : String;
  exam_id : String;
  year1   : any;
  year2   : any;
  year3   : any;
  year4   : any;
  year3_optional : any;
  year4_optional : any;
  
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
    return this.http.get<subjects>('http://localhost:3000/exams/getexamdetails',{headers:headers, params:params});
  }

  //register for an exam
  registration(form){
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');
    return this.http.post<news>('http://localhost:3000/exams/register',form,{headers:headers});
  }

  getAllExams(){
    let headers = new HttpHeaders();
    headers =headers.set('content-type','application/json');
    return this.http.get<any>('http://localhost:3000/exams/getallexams');
  }

}
