# sails-generate-generator

A generator for generating generators for use with `sails generate`.

> Or in other words, [Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo!](http://en.wikipedia.org/wiki/Buffalo_buffalo_Buffalo_buffalo_buffalo_buffalo_Buffalo_buffalo)


## Production Usage

#### On the command line

```sh
sails generate generator foo
```

#### In a node script

```javascript
var generate = require('sails-generate');
var scope = {};
generate(require('sails-generate-generator'), scope, function (err, output) {
	if (err) throw err;

	// Log output for your enjoyment:
	console.log(output);
});
```

#### Development

To get started quickly and see this generator in action, run the `bin/index.js` script:

```sh
$ git clone YOUR_FORK_OF_THIS_REPO <%= generatorName %>
$ cd <%= generatorName %>
$ node ./bin
```

`bin/index.js` is a simple script, bundled only for convenience, that runs the generator with hard-coded scope variables.  Feel free to modify that file however you like.


## Questions?

See `FAQ.md`.

## Want to override or enhance this generator?

See `CONTRIBUTING.md`.

## License

See `LICENSE.md`.

## Resources

[![Sails.js](https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67)](http://sailsjs.org)

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)

