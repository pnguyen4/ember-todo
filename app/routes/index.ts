import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store: any;

  async model() {
    return this.store.findAll('todo');
  }
}
