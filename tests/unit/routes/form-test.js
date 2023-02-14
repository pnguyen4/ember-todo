import { module, test } from 'qunit';
import { setupTest } from 'ember-todo/tests/helpers';

module('Unit | Route | form', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:form');
    assert.ok(route);
  });
});
