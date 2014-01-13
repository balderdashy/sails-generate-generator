/**
 * Generator dependencies
 */

var path = require('path');



/**
 * sails-generate-generator
 *
 * Usage:
 * `sails-generate-generator`
 *
 * @type {Object}
 */
module.exports = {

	bootstrap: require('./lib/bootstrap'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-generator) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};


// Output targets syntax:
//
// You can use params in your target paths:
// {
//   './:someScopeVariable/somethingStatic/:somethingDynamicAgain': '...'
// }


// Other directives:
//
// Generate a folder: (`folder`)
// './controllers': { folder: {} }
//
//
//
// Copy a file : (`copy`)
// (note: if the path doesn't exist, empty directories will be created, like mkdirp)
//
// './bar.foo': { copy: path.resolve(__dirname, './templates/foo.template') },
// './baz/bar/foo': { copy: path.resolve(__dirname, './templates/foo.template') },
//
//
//
// Render an EJS template: (`template`)
// (note: the template filename doesn't have to end in *.ejs)
// './README.md': { template: path.resolve(__dirname, './templates/README.template') },
//
//
//
// Run another generator:
// './controllers/:controllerName.js': 'adapter'
//
//
// Do something custom: (asynchronous)
// './foo/bar': { exec: function (scope, cb) {
//   cb();
// }}

