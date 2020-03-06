'use strict';

const peg = require('pegjs');

module.exports = {
  // See https://eslint.org/docs/developer-guide/working-with-plugins#processors-in-plugins
  // See also https://eslint.org/docs/user-guide/configuring#specifying-processor
  preprocess (text /* , filename */) {
    // here, you can strip out any non-JS content
    // and split into multiple strings to lint

    const ast = peg.parser.parse(text);

    // console.log('ast', ast.rules[0]);

    const code1 = [
      ast.initializer.code,
      ...ast.rules.reduce((s, rule, i) => {
        if (i === 0) console.log('rule', rule.expression.expression.elements);
        return s + rule.expression.code;
      }, '')
    ].join('');

    return [ // return an array of code blocks to lint
      { text: code1, filename: '0.js' }
    ];
  },

  // takes a Message[][] and filename
  postprocess (messages /* , filename */) {
    // `messages` argument contains two-dimensional array of Message objects
    // where each top-level array item contains array of lint messages related
    // to the text that was returned in array from preprocess() method

    // you need to return a one-dimensional array of the messages you want to keep
    return [].concat(...messages);
  },

  supportsAutofix: true // (optional, defaults to false)
};
