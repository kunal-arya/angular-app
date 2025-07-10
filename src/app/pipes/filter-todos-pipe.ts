import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Array<Todo> {
    if(!searchTerm) return todos;

    const searchTermL = searchTerm.toLowerCase()

    return todos.filter(todo => todo.title.toLowerCase().includes(searchTermL))
  }

}
