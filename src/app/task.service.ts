import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Task } from './models/tasks.models';

@Injectable()
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;

  constructor(
    private db: AngularFirestore
  ) {
    this.setTasks();
   }

  private setTasks(): void {
    this.tasks = this.db.collection<Task>('/tasks');
  }

}
