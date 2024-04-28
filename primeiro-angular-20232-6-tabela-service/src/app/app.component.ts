import { Component } from '@angular/core';
import {Student} from "./shared/model/student";
import {STUDENTS} from "./shared/model/STUDENTS";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-angular-20232';

  constructor() {
  }

}
