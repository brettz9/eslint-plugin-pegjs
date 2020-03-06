# eslint-plugin-pegjs

Linting for JavaScript blocks within PEG.js grammars

**Sorry, this project is not complete; it would depend on [source maps](https://github.com/pegjs/pegjs/issues/93) in PEG.js to be done efficiently (and probably to also facilitate a more permanent solution to [code coverage](https://github.com/pegjs/pegjs/pull/632) in the process).**

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-pegjs`:

```
$ npm install eslint-plugin-pegjs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-pegjs` globally.

## Usage

Add `pegjs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "pegjs"
    ],
    "overrides": [
        {
            "files": ["*.pegjs"],
            "processor": "pegjs/pegjs"
        }
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "pegjs/no-peg-variables": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
