import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'http://localhost:8080/api/students';

  constructor(private http:HttpClient) { }


  getStudents(): Observable<Student[]> {
    //return this.http.get<Student[]>(`${this.url}`);
  return  this.http.get<Student []>(`${this.url}`)
 
  }


  addStudent(student:Student): Observable<Object>{
     //return this.http.post(`${this.url}`,student);
    return  this.http.post(`${this.url}`,student)
 }


  getStudent(id:number): Observable<Student>{
    return this.http.get<Student>(`${this.url}/${id}`) ;
     //return this.http.get<Student>(`${this.url}/${id}`)
  }


  updateStudent(id:number, student:Student):Observable<Object>{
     return this.http.put(`${this.url}/${id}`,student);
  }

  deleteStudent(id:number):Observable<Object>{
  return this.http.delete(`${this.url}/${id}`);
  }

}
