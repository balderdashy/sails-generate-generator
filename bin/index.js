/**
 * Module dependencies
 */
var sailsgen = require('sails-generate');
var path = require('path');
var rootrequire = require('root-require');
var Generator = rootrequire('lib');


// Cheap access so we can run this generator directly
if (!process.argv[2]) {
	throw 'Please specify the `generatorName` as the first argument.';
}

var scope = {
	rootPath: path.resolve(__dirname),
	generatorName: process.argv[2]
};
sailsgen(Generator, scope, function (err) {
	if (err) throw err;

	// It worked.
});
