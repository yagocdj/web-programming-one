import { Component } from '@angular/core';
import {Task} from '../shared/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO list';
  taskInfos: Object;
  task: Task;
  tasks: Array<Task>;

  constructor() {
    this.task = new Task();
    this.tasks = new Array<Task>();
  }

  // titulo = 'Social IFPB';
  // usuario: Usuario;
  // usuarios: Array<Usuario>;
  //
  // constructor() {
  //   this.usuario = new Usuario();
  //   this.usuarios = new Array<Usuario>();
  // }
  //
  // inserirUsuario(): void {
  //   this.usuarios.push(this.usuario);
  //   this.usuario = new Usuario();
  // }
}
