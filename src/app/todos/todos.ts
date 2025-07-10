import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError, single } from 'rxjs';
import { TodoItem } from '../todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal<string>("");

  ngOnInit(): void {
    this.todoService.getTodosForApi().pipe(
      catchError(err => {
      console.log(err)
      throw err
    })
    ).subscribe((todos) => {
      this.todoItems.set(todos)
    })
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update(todos => todos.map(todo => {
      if(todoItem.id === todo.id) {
        return {
          ...todo,
          completed: !todoItem.completed
        }
      } else {
        return todo
      }
    }))
  }
}
