import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Task } from './../models/tasks.models';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>;

  selectedTask: Task;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerformTask(task: Task): void {
    console.log(task);

  }

}
