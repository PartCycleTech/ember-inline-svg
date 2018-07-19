import { findAll, visit } from '@ember/test-helpers';
import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: InlineSvg', function(hooks) {
  hooks.beforeEach(function() {
    App = startApp();
  });

  hooks.afterEach(function() {
    run(App, 'destroy');
  });

  test('displays SVG at root', async function(assert) {
    await visit('/root');

    assert.ok(findAll(".kiwi-image-at-root svg").length, "has an SVG");
  });

  test('displays SVG in subdirectory', async function(assert) {
    await visit('/subdirectory');

    assert.ok(findAll(".kiwi-image-in-directory svg").length, "has an SVG which is in a directory");
  });

  test('adds class to SVG', async function(assert) {
    await visit('/class');

    assert.ok(findAll(".kiwi-image-with-a-class svg.with-a-class").length, "has added the class");
  });

  test('trims unnecessary .svg` extension', async function(assert) {
    await visit('/extension');

    assert.ok(findAll(".kiwi-image-with-extension svg").length, "has an SVG, extension was trimmed");
  });

  test('runs through SVGO', async function(assert) {
    await visit('/root');

    assert.ok(!findAll(".kiwi-image-at-root svg title").length, "has stripped the title");
  });
});
