import { Component, OnInit } from '@angular/core';
import { stat } from 'fs';
import { TodosServiceService } from '../todos-service.service';
import { Todo } from '../todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
  constructor(private state: TodosServiceService) { }
  ngOnInit(): void {
    this.tasks = this.state.tasks.value;
  }
  tasks: Todo[];

  deleteTask(index:number){
    this.state.tasks.value.splice(index);
  }

  completeTask(index:number){
    this.state.tasks.value[index].status = true;
  }
}
