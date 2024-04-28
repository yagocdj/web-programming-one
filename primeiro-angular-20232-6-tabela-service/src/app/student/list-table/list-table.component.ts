import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../shared/model/student";
import {StudentService} from "../../shared/services/student.service";

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  datasource: MatTableDataSource<Student>;
  visibleColumns = ['matricula', 'nome'];

  constructor(private studentService: StudentService) {
    this.datasource = new MatTableDataSource<Student>();
  }

  ngOnInit() {
    this.studentService.list().subscribe(Students => {
      this.datasource = new MatTableDataSource<Student>(Students);
    });
  }

  filtrar(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    this.datasource.filter = text;
  }

}
