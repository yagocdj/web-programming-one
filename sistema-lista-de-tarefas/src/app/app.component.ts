import { Component } from '@angular/core';
import {Task} from '../shared/model/task';
import {getMultipleValuesInSingleSelectionError} from "@angular/cdk/collections";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO list';
  task: Task;
  tasks: Array<Task>;
  filteredTasks: Array<Task>;
  isToFilterByTitle: boolean;
  isToUpdate: boolean;

  constructor() {
    this.tasks = new Array<Task>();
    this.filteredTasks = new Array<Task>();
    this.task = new Task();
    this.isToFilterByTitle = false;
    this.isToUpdate = false;
  }

  insertTask(): void {
    this.tasks.push(this.task);
    this.task = new Task();
  }

  removeTask(taskToBeRemoved: Task): void {
    const toBeRemovedTaskIndex = this.tasks.findIndex(
      (task: Task) => task.title === taskToBeRemoved.title);
    if (toBeRemovedTaskIndex >= 0) {
      this.tasks.splice(toBeRemovedTaskIndex, 1);
    }
  }

  searchByTaskTitle(taskTitle: string): void {
    if (this.isToFilterByTitle) {
      this.filteredTasks = [];
      this.tasks.forEach(task => {
        if (task.title.startsWith(taskTitle)) {
          this.filteredTasks.push(task);
        }
      });
    }
  }

  changeIsToFilter(): void {
    this.isToFilterByTitle = ! this.isToFilterByTitle;
  }

  findTask(title: string): number | undefined {
    const searchedTaskIndex= this.tasks.findIndex(task =>
      task.title === title
    );
    if (searchedTaskIndex >= 0) {
      return searchedTaskIndex;
    }
    return undefined;
  }

  updateSelectedTask(selectedTask: Task): void {
    this.task = selectedTask;
    this.isToUpdate = true;
  }

  confirmUpdate(updatedTask: Task): void {
    const indexOfTaskToBeUpdated = this.tasks.findIndex(
      (task: Task)=> task.title === updatedTask.title
    );
    if (indexOfTaskToBeUpdated >= 0) {
      this.tasks[indexOfTaskToBeUpdated] = updatedTask;
      this.task = new Task();
    }
    this.isToUpdate = false;
  }
}
