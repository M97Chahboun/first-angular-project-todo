import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  tasks = new BehaviorSubject<Todo[]>([new Todo(1,false,'First Task')]);
  allTasks = this.tasks.asObservable()
  constructor() { }
  addNewTask(){
    this.tasks.next(
      [
        new Todo(2,false,'title')
      ]
    )
  }
}
