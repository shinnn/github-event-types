'use strict';

const assert = require('assert');
const getGithubEventTypes = require('get-github-event-types');
const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const test = require('tape');

const MSG = 'should have no conflict with the latest Github Event type specification.';

getGithubEventTypes().then(expected => {
  test('index.json', t => {
    t.deepEqual(require('.'), expected, MSG);
    t.end();
  });

  test('module.js', t => {
    rollup({entry: require('./package.json').module}).then(bundle => {
      t.deepEqual(requireFromString(bundle.generate({format: 'cjs'}).code), expected, MSG);
      t.end();
    });
  });
}).catch(assert.ifError);
