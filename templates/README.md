# <%=moduleName%>

A generator for Sails.js.


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


## Contributing to this generator

See `CONTRIBUTING.md`.

## License

See `LICENSE.md`.

