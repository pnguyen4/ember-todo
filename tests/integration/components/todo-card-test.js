import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('foo', function (...args) {
      console.log('run action with args:', args);
    });
    await render(
      hbs`<TodoCard @id="1" @title="test" @description="test" @status="In Progress" @delete={{this.foo}} @update={{this.foo}} />`
    );

    assert
      .dom(this.element)
      .hasText('test (In Progress) id: 1 test Update Status');

    // Template block usage:
    await render(
      hbs`<TodoCard @id="1" @title="test" @description="test" @status="In Progress" @delete={{this.foo}} @update={{this.foo}}>template block text</TodoCard>`
    );

    assert
      .dom(this.element)
      .hasText('test (In Progress) id: 1 test Update Status');
  });
});
