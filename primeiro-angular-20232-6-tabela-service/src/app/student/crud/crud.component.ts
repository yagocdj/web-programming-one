import { Component } from '@angular/core';
import { Student } from "../../shared/model/student";
import { STUDENTS } from "../../shared/model/STUDENTS";
import { StudentService } from "../../shared/services/student.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  readonly NAME_CREATE_BUTTON = 'Create';
  readonly NAME_UPDATE_BUTTON = 'Update';
  student: Student;
  errorMessage = '';
  isSigningUp = true;
  buttonName = this.NAME_CREATE_BUTTON;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log('HELLOOOOOOOOOOOO!');
    // get the student's ID
    const editingId = this.activatedRoute.snapshot.params['id'];
    // const routeHasAnId = this.activatedRoute.snapshot.paramMap.has('id');
    // const editingId = this.activatedRoute.snapshot.paramMap.get('id');

    if (editingId) {  // does it returned something?
      this.isSigningUp = false;  // it is editing
      this.studentService.searchById(editingId).subscribe(returnedStudent => {
        this.student = returnedStudent;
      });
    }
    this.student = new Student('', '', '', 0, '');
    this.buttonName = this.isSigningUp ? this.NAME_CREATE_BUTTON : this.NAME_UPDATE_BUTTON;
  }

  createOrUpdate(): void {
    console.log('IS SIGNING UP?' + this.isSigningUp);
    if (this.isSigningUp) {
      this.studentService.create(this.student).subscribe(
        registeredStudent => {
          this.router.navigate(['/list-students']);
        }
      );
    } else {
      this.studentService.update(this.student).subscribe(student => {
        this.router.navigate(['/list-students']);
      });
    }
  }

  // private ehMatriculaCadastrada(matricula: string): boolean {
  //   const studentsRetornados = this.students.filter(student => student.matricula === matricula);
  //   return studentsRetornados.length > 0;
  // }

}
