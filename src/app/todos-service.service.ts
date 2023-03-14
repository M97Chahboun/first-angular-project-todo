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
      { no: this.allTodos.length+1, status: false, title: taskName }
    )
  }
  getTasks(): Observable<Todo[]> {
    const todos = of(this.allTodos);
    return todos;
  }

  deleteTask(index: number) {
    this.allTodos.splice(index,1);
  }

  updateTask(index: number) {
    this.allTodos[index].status = !this.allTodos[index].status;
  }
}
