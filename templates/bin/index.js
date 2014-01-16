/**
 * Module dependencies
 */

var sailsgen = require('sails-generate')
	, path = require('path');



//
// This script exists so we can run our generator
// directly from the command-line for convenience
// during development.
//


sailsgen(Generator, {
	generatorType: '<%= generatorName %>',
	modules: {
		'<%= generatorName %>': path.resolve(__dirname, '../lib')
	},
	rootPath: process.cwd(),

	// You can stub other scope variables here, e.g.
	// foo: 'bar'

}, function (err) {
	if (err) throw err;

	// It worked!
	console.log('Done.');
});
