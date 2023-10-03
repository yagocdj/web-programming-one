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
  allTasks: Array<Task>;
  filteredTasks: Array<Task>;

  constructor() {
    this.allTasks = new Array<Task>();
    this.filteredTasks = new Array<Task>();
    this.task = new Task(this.generateTaskId());
  }

  insertTask(): void {
    this.allTasks.push(this.task);
    this.task = new Task(this.generateTaskId());
  }

  removeTask(taskToBeRemoved: Task): void {
    const toBeRemovedTaskIndex = this.allTasks.findIndex(
      (task: Task) => task.id === taskToBeRemoved.id);
    if (toBeRemovedTaskIndex >= 0) {
      this.allTasks.splice(toBeRemovedTaskIndex, 1);
    }
  }

  private generateTaskId(): number {
    if (this.allTasks.length > 0) {
      return this.allTasks[this.allTasks.length - 1].id + 1;
    }
    return 1;
  }

  searchByTaskTitle(taskTitle: string): void {
    this.filteredTasks = this.allTasks.filter(
      (task: Task) => task.title.startsWith(taskTitle));

  }
}
