import { Component, Input, OnInit } from '@angular/core';
import { stat } from 'fs';
import { TodosServiceService } from '../todos-service.service';
import { Todo } from '../todos.model';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  taskName = '';

  constructor(private state: TodosServiceService) { }

  ngOnInit(): void {
  }

  addTask(){
    this.state.addTask(this.taskName);
    this.taskName = '';
  }
}
