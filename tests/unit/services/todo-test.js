import { module, test } from 'qunit';
import { setupTest } from 'ember-todo/tests/helpers';

module('Unit | Service | todo', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:todo');
    assert.ok(service);
  });
});
