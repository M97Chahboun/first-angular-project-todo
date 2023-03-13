import { Component, Input, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import {Todo } from '../todos.model';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  taskName = '';
  constructor(private state: TodosServiceService) { }
  tasks: Todo[];

  ngOnInit(): void {
    this.state.tasks.subscribe(result => {
      this.tasks = result;
    });
  }
  addNewTask(){
    this.state.addNewTask();
    this.state.tasks.value.push(
      new Todo(2,false,this.taskName)
    );
    this.taskName = '';
  }
}
