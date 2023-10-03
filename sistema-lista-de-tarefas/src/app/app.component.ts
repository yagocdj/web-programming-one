import { Component } from '@angular/core';
import {Task} from '../shared/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO list';
  task: Task;
  tasks: Array<Task>;

  constructor() {
    this.tasks = new Array<Task>();
    this.task = new Task(this.generateTaskId());
  }

  insertTask(): void {
    this.tasks.push(this.task);
    this.task = new Task(this.generateTaskId());
  }

  removeTask(taskToBeRemoved: Task): void {
    const toBeRemovedTaskIndex = this.tasks.findIndex(
      (task: Task) => task.id === taskToBeRemoved.id);
    if (toBeRemovedTaskIndex >= 0) {
      this.tasks.splice(toBeRemovedTaskIndex, 1);
    }
  }

  private generateTaskId(): number {
    if (this.tasks.length > 0) {
      return this.tasks[this.tasks.length - 1].id + 1;
    }
    return 1;
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
