import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Todo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  allTodos: Todo[] = [{ no: 1, status: false, title: 'First Task' }];
  addTask(taskName: string) {
    this.allTodos.push(
      { no: 2, status: false, title: taskName }
    )
  }
  getTasks(): Observable<Todo[]> {
    const todos = of(this.allTodos);
    return todos;
  }

  deleteTask(index: number) {
    this.allTodos.splice(index);
  }

  completeTask(index: number) {
    this.allTodos[index].status = true;
  }
}
