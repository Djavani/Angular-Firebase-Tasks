import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

import { Task } from '../models/tasks.models';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  task: Task = { title: ''};

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  public onSave(): void {
    this.taskService.create(this.task)
      .then(() => {
        console.log('Task Created!');
        this.dialogRef.close();
      }).catch (error => {

      })
  }

}
