import { Component, input, output } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HighlightCompletedTodo } from '../directives/highlight-completed-todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, NgClass],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  todo = input.required<Todo>()
  todoToggled = output<Todo>()

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
