/**
 * Module dependencies
 */

var sailsgen = require('sails-generate')
	, path = require('path');



//
// This script exists so we can run this generator
// directly from the command-line for convenience.
//

var scope = {
	generatorType: 'generator',
	rootPath: process.cwd(),
	modules: {
		generator: path.resolve(__dirname, '../lib')
	},

	// For the NEW generator we're generating:
	generatorName: process.argv[2],
};
sailsgen(scope, function (err) {
	if (err) throw err;

	// It worked.
	console.log('Done.');
});
