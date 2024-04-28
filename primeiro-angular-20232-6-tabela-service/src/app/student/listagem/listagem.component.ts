import { Component, OnInit } from '@angular/core';
import { STUDENTS } from "../../shared/model/STUDENTS";
import { Student } from "../../shared/model/student";
import { StudentService } from "../../shared/services/student.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  students: Student[] = [];
  studentSearch: Array<Student> = [];
  matriculaPesquisada: string = '';
  searchedStudents: Student[] = [];

  constructor(private studentService: StudentService, private roteador: Router) {
  }

  ngOnInit() {
    this.studentService.list().subscribe(returnedStudents => {
      this.students = returnedStudents;
    }
    );
    console.log('estou aqui');
    console.log(this.students);
  }

  remove(studentToBeRemoved: Student): void {
    this.studentService.remove(studentToBeRemoved).subscribe(removedStudent => {
      console.log('Student removido');
      const indxAremove = this.students.findIndex(student =>
        student.matricula === studentToBeRemoved.matricula);

      if (indxAremove >= 0) {
        this.students.splice(indxAremove, 1);
      }

    });

  }

  pesquisar() {
    this.studentService.searchByEnrollment(this.matriculaPesquisada).subscribe(students => {
      this.searchedStudents = students;
    });
  }

  editar(id: string): void {
    console.log('id');
    console.log(id);
    this.roteador.navigate(['update-student', id]);
  }

}
