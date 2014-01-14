# <%=moduleName%>

A `<%= generatorName %>` generator for Sails.js.


## Usage

#### On the command line

```sh
<% if (typeof usage === 'undefined') {
%>$ sails generate <%= generatorName %> <%
}
else {
%><%= usage %><%
}
%>
```

#### In a node script

```javascript
var path = require('path');
var sailsgen = require('sails-generate');
var scope = {
	rootPath: path.resolve(__dirname)
};
sailsgen(require('<%=moduleName%>'), scope, function (err) {
	if (err) throw err;

	// It worked.
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

See `LICENSE`.

