import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './../models/tasks.models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent  {

  @Input() task: Task;
  @Output() selectTask = new EventEmitter<Task>();
  @Output() performTask = new EventEmitter<Task>();

  public executeAction(action: string): void {
    this[action].emit(this.task);
  }

}
