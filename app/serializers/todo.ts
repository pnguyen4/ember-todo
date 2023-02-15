import RESTSerializer from '@ember-data/serializer/rest';

export default class TodoSerializer extends RESTSerializer {
  primaryKey = '_id'; // converts MongoDB '_id', ember-data requires that we have an 'id' attribute
}
