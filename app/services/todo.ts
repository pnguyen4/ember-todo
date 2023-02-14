import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export interface Todo {
  name: string;
  description: string;
  status: 'Incomplete' | 'In Progress' | 'Complete';
}

export default class TodoService extends Service {
  @tracked todoList: Todo[] = [];

  addTodo(todo: Todo) {
    this.todoList = [...this.todoList, todo];
  }
}
