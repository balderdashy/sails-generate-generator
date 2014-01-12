# sails-generate-generator

A generator for Sails.js.


## Usage

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


## Contributing to this generator

See `CONTRIBUTING.md`.

## License

See `LICENSE.md`.

