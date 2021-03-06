import {
  dottify,
  applyOptions,
} from 'ember-inline-svg/utils/general';

import { module, test } from 'qunit';

module('utils: dottify', function() {
  test('replaces slashes with dots', function(assert) {
    assert.equal(dottify("foo/bar/baz"), "foo.bar.baz");
  });

  test('removes leading slashes before replacing slashes with dots', function(assert) {
    assert.equal(dottify("/foo/bar/baz"), "foo.bar.baz");
  });
});

module('utils: applyOptions', function() {
  test('adds class to svg element', function(assert) {
    assert.equal(applyOptions('<svg></svg>', {class: 'a-class'}), '<svg class="a-class"></svg>');
    assert.equal(applyOptions('<svg width="100"></svg>', {class: 'a-class'}), '<svg class="a-class" width="100"></svg>');
    assert.equal(applyOptions('<svg></svg>', null), '<svg></svg>');
  });
});
