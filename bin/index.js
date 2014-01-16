/**
 * Module dependencies
 */
var sailsgen = require('sails-generate/lib/generate');
var Generator = require('../lib');


//
// This script exists so we can run this generator
// directly from the command-line for convenience.
//

var scope = {
	rootPath: process.cwd(),
	generatorName: process.argv[2]
};
sailsgen(Generator, scope, function (err) {
	if (err) throw err;

	// It worked.
	console.log('Done.');
});
