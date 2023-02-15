import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service store: any;

  @action
  async deleteTodo(id: number) {
    let todo = this.store.peekRecord('todo', id);
    await todo.destroyRecord();
    // sends DELETE request to http://localhost:3000/api/v1/todos/:id
  }
}
