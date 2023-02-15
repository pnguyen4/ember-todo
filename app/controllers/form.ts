import Controller from '@ember/controller';
import { action } from '@ember/object';
//import { Todo } from 'ember-todo/services/todo';
import { inject as service } from '@ember/service';
//import TodoService from 'ember-todo/services/todo';

export default class FormController extends Controller {
  //@service declare todo: TodoService;
  @service store: any;
  title = '';
  description = '';

  @action
  async addTodo() {
    if (this.title && this.description) {
      const data = {
        title: this.title,
        description: this.description,
        status: 'Incomplete',
      };
      let todo = this.store.createRecord('todo', data); // updates client state as side effect
      await todo.save(); // send POST request to server, body contains a todo property with title, description, status 
    }
  }
}
