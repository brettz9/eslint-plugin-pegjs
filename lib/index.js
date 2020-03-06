/**
 * @fileoverview Linting for JavaScript blocks within PEG.js grammars
 * @author Brett Zamir
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + '/rules'),

  // import processors
  processors: {
    // add your processors here
    pegjs: require('./processors/pegjs.js')
  }
};
