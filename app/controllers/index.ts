import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service store: any;
  categories = ['Incomplete', 'In Progress', 'Complete'];

  @action
  async deleteTodo(id: string) {
    let todo = this.store.peekRecord('todo', id);
    await todo.destroyRecord();
    // sends DELETE request to http://localhost:3000/api/v1/todos/:id
  }

  @action
  updateTodo(id: string, status: string) {
    console.log(id);
    const newStatus =
      status == 'Incomplete'
        ? 'In Progress'
        : status == 'In Progress'
        ? 'Complete'
        : 'Incomplete';
    this.store.findRecord('todo', id).then((todo: any) => {
      todo.status = newStatus;
      todo.save(); // PUT request
    });
  }
}
