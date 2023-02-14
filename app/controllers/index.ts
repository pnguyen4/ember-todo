import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import TodoService from 'ember-todo/services/todo';

export default class IndexController extends Controller {
  @service declare todo: TodoService;
}
