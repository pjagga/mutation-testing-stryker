# mutation-testing-stryker

### Install
Install with npm:

```$ npm install```

```$ npm i -g stryker-cli```

### Usage
```$ stryker init```

Choose the following options in the questionnaire:

```? Do you want to install Stryker locally?: npm
? Are you using one of these frameworks? Then select a preset configuration. None/other
? Which test runner do you want to use? If your test runner isn't listed here, you can choose "command" (it uses your npm testcommand, but will come with a big performance penalty) jest
? What kind of code do you want to mutate? javascript
? [optional] What kind transformations should be applied to your code? (Press to select, to toggle all, to invert selection)
? Which reporter(s) do you want to use? html, clear-text, progress
Note: Use spacebar for multiple selection or choose html and press enter
? Which package manager do you want to use? npm
```

Now add the source file you want to generate your mutants for (it will be the source code file), in this case './index.js'. After adding mutate: ["./index.js"] stryker.conf.js looks as follows:

```module.exports = function(config) {
  config.set({
    mutate: ["./index.js"],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off"
  });
};
```

```$ stryker run```

This will generate mutants for against your mutate file (./index.js), and will run your tests in test.js and see if the mutants are killed. It will also provide a report using clear text reporter showing % of code covered. It also provides suggestions on which mutants need more code coverage.
