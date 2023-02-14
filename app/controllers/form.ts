import Controller from '@ember/controller';
import { action } from '@ember/object';
import { Todo } from 'ember-todo/services/todo';
import { inject as service } from '@ember/service';
import TodoService from 'ember-todo/services/todo';

export default class FormController extends Controller {
  @service declare todo: TodoService;
  title = '';
  description = '';

  @action
  addTodo() {
    if (this.title && this.description) {
      const newTodo: Todo = {
        title: this.title,
        description: this.description,
        status: 'Incomplete',
      };
      this.todo.addTodo(newTodo);
    }
  }
}
