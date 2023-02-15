import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  // note: id is implicitly an attribute
  @attr()
  declare title: string;

  @attr()
  declare description: string;

  @attr()
  declare status: 'Incomplete' | 'In Progress' | 'Complete';
}
