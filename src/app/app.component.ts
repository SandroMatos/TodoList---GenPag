import { TaskService } from "./app.service";
import { config } from "./app.config";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "./app.model";
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "To do List";
  taskInput!: string;
  tasks!: Observable<any[]>;
  editMode: boolean = false;
  taskToEdit: any = {};
  status!: boolean;

  constructor(private db: AngularFirestore, private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.db
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(
        map((actions: any[]) => {
          return actions.map(a => {
            //Get document data
            const data = a.payload.doc.data() as Task;
            //Get document id
            const taskId = a.payload.doc.id;
            return { taskId, ...data };
          })
        })
      )
  }
  editTask(task: { status: boolean, description: string; }) {
    //Set editMode
    this.taskToEdit = task;
    this.editMode = true;
    this.taskInput = task.description;
    this.status = task.status;
  }
  editStatus(task: any) {
    //Set status
    this.taskToEdit = task;
    this.status = (task.status == true ? false : true);

    //Get the status value
    let taskStatus = {
      status: this.status
    };
    
    let taskId = this.taskToEdit.taskId;
    this.taskService.updateTask(taskId, taskStatus);
  }
  saveTaskToDo() {
    if (this.taskInput !== null) {
      //Get the input value
      let task = {
        description: this.taskInput,
        status: this.status,
      };

      if (!this.editMode) {
        task.status = false;
        this.taskService.addTask(task);
      } else {
        let taskId = this.taskToEdit.taskId;
        this.taskService.updateTask(taskId, task);
      }

      this.editMode = false;
      this.taskInput = "";
    }
  } 
  deleteTask(task: { taskId: any; }) {
    //Get the task id
    let taskId = task.taskId;
    //Delete the task
    this.taskService.deleteTask(taskId);
  } 
}
