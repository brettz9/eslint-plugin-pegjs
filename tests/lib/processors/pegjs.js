'use strict';

const fs = require('fs');
const path = require('path');
const pegjsProcessor = require('../../../lib/processors/pegjs.js');

const jsGrammar = fs.readFileSync(
  path.join(
    __dirname,
    '../../../',
    '/node_modules/pegjs/examples/javascript.pegjs'
  ),
  'utf8'
);

describe('Preprocessing', function () {
  it('Basic', function () {
    pegjsProcessor.preprocess(
      jsGrammar
    );
  });
});
