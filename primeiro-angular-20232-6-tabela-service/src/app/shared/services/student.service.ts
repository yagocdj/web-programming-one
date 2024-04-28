import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from "../model/student";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  STUDENT_API = 'http://localhost:3000/Students';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.STUDENT_API);
  }

  create(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.STUDENT_API, student);
  }

  remove(student: Student): Observable<any> {
    return this.httpClient.delete(`${this.STUDENT_API}/${student.id}`);
  }

  searchById(id: string): Observable<Student> {
    return this.httpClient.get<Student>(`${this.STUDENT_API}/${id}`);
  }

  update(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.STUDENT_API}/${student.id}`, student);
  }

  searchByEnrollment(matricula: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.STUDENT_API}?matricula=${matricula}`);
  }
}
