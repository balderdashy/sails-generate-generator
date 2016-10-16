# <%= moduleName %>

A `<%= generatorType %>` generator for use with the Sails command-line interface.


## Installation

```sh
$ npm install <%= moduleName %> --save
```

Then merge the following into your `.sailsrc` file:

```json
{
  "modules": {
    "<%= generatorType %>": "<%= moduleName %>"
  }
}
```

> Certain generators are installed by default in Sails, but they can be overridden.  Other generators add support for generating entirely new kinds of things.
> Check out [Concepts > Extending Sails > Generators](http://sailsjs.com/docs/concepts/extending-sails/generators) for information on installing generator overrides / custom generators and information on building your own generators.



## Usage

```bash
<% if (typeof usage === 'undefined') {
%>$ sails generate <%= generatorType %> <%
}
else {
%><%= usage %><%
}
%>
```



## Questions?

See [Extending Sails > Generators > Custom Generators](http://sailsjs.com/docs/concepts/extending-sails/generators/custom-generators) in the [Sails documentation](http://sailsjs.com/documentation), or check out [recommended support options](http://sailsjs.com/support).

<a href="http://sailsjs.com" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>



## License

This <%= generatorType %> generator is available under the **<%= license %> license**.

The [Sails framework](http://sailsjs.com) is free and open-source under the [MIT License](http://sailsjs.com/license).


![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
