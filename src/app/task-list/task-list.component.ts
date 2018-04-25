import { Task } from './../models/tasks.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {
      uid: '',
      title: 'Learn Angular',
      done: false
    },
    {
      uid: '',
      title: 'Learn Firebase',
      done: false
    }
  ];

  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onPerformTask(task: Task): void {
    console.log(task);

  }

}
