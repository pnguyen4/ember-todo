import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export interface Todo {
  title: string;
  description: string;
  status: 'Incomplete' | 'In Progress' | 'Complete';
}

export default class TodoService extends Service {
  @tracked todoList: Todo[] = [
    {
      title: 'Task 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\
         do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      status: 'Incomplete',
    },
  ];

  addTodo(todo: Todo) {
    this.todoList = [...this.todoList, todo];
  }
}
