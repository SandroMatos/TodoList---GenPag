import { config } from "./app.config";
import { Task } from "./app.model";
import { Injectable } from "@angular/core";
import { 
  AngularFirestoreDocument, 
  AngularFirestore, 
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable()
export class TaskService {
  tasks: AngularFirestoreCollection<Task>;
  private taskDoc!: AngularFirestoreDocument<Task>;
  
  constructor(private db: AngularFirestore) {
    //Get the tasks collection list
    this.tasks = db.collection<Task>(config.collection_endpoint);
  }
  addTask(task: any) {
    //Add the new task to the collection
    this.tasks.add(task);
  }
  updateTask(taskId: any, update: Partial<Task>) {
    //Get the taskDoc
    this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${taskId}`);
    this.taskDoc.update(update);
  }
  deleteTask(id: any) {
    //Get the taskDoc
    this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
    //Delete the taskDoc
    this.taskDoc.delete();
  } 
}
