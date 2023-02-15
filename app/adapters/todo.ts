import RESTAdapter from '@ember-data/adapter/rest';

export default class TodoAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
  namespace = 'api/v1';
  // example: store.findAll('todo'); will now automatically run a GET request at
  // http://localhost:3000/api/v1/todos expects a response object with "todos" or "todo" property
}
