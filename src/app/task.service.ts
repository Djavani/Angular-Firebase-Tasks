import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { CollectionReference } from '@firebase/firestore-types';
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
    this.tasks = this.db.collection<Task>('/tasks',
    (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc'));
  }

  public create(task: Task): Promise<void> {
    const uid = this.db.createId();
    return this.tasks.doc<Task>(uid)
      .set({
        uid,
        title: task.title,
        done: false
      });
  }

  public update(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid)
      .update(task);
  }

  public delete(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid)
      .delete();
  }

  public get(uid: string): Observable<Task> {
    return this.tasks.doc<Task>(uid).valueChanges();
  }


}
