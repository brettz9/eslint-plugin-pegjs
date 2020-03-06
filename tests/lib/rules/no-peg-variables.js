/**
 * @fileoverview Prevent use of the PEG.js variables used internally
 * @author Brett Zamir
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-peg-variables"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-peg-variables", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "peg$parse = 5",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
