import { Component, Input, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import { Todo } from '../todos.model';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  taskName = '';

  constructor(public state: TodosServiceService) { }

  tasks: Todo[] = [];

  ngOnInit(): void {
    this.state.getTasks();
  }

  getTasks(): void {
    this.state.getTasks()
      .subscribe(allTasks => this.tasks = allTasks);
  }
}
