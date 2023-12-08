import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
//create a constructor and inject the HttpClient
  constructor(private http:HttpClient) { }

  //create a method named getStudentList() and do a get call to http://localhost:3000/studentList
  //and return the response as Observable
  getStudentList():Observable<any>{
    return this.http.get<any>("http://localhost:3000/studentList");
  }
}
