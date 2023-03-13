import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import { Todo } from '../todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  constructor(public state: TodosServiceService) { }

  tasks: Todo[] = [];

  getTasks(): void {
    this.state.getTasks()
      .subscribe(allTasks => this.tasks = allTasks);
  }

  ngOnInit(): void {
    this.state.getTasks();
  }

}
