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
var generate = require('sails-generate');
var scope = {};
generate(require('<%=moduleName%>'), scope, function (err) {
	if (err) throw err;

	// Log output available in `scope` for your enjoyment:
	console.log(scope);
});
```


## Contributing to this generator

See `CONTRIBUTING.md`.

## License

See `LICENSE.md`.

