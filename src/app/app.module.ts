import { TaskService } from './task.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import {
  MatToolbarModule,
  MatListModule,
  MatLineModule,
  MatSlideToggleModule} from '@angular/material';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatListModule,
    MatLineModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( private afs: AngularFirestore ) {
    afs.app.firestore().settings({ timestampsInSnapshots: true });
  }
 }
