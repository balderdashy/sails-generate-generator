/**
 * Module dependencies.
 */

var reportback = require('reportback')()
	, sailsgen = require('sails-generate')
	, fsx = require('fs-extra')
	, Generator = require('../lib');



var TEST_SCOPE = {
	rootPath: __dirname,
	name: 'generator'
};


/**
 * Test helpers
 * @type {Object}
 */

module.exports = {
	setup: function (done) {
		sailsgen(Generator, TEST_SCOPE, reportback.extend(done));
	},

	teardown: function (done) {
		done = reportback.extend(done);

		// Expected generator base output path
		var expectedOutputPath = path.resolve(TEST_SCOPE.rootPath, TEST_SCOPE);
		// Top permissible path to start deleting things at
		var limitPath = path.resolve(__dirname);

		if ( !_isSubpath(expectedOutputPath, limitPath) ) {
			throw new Error('Invalid path.');
		}

		// Clean up files/directory
		fsx.remove(targetRootPath, done);
	}
};


/**
 * Convert a string into the escaped string that would
 * match it in a RegExp.
 *
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function _regExcape(str) {
	return new RegExp(str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"));
}


/**
 * Verify that `subpath` starts with `toppath`
 *
 * @param  {[type]}  subpath [description]
 * @param  {[type]}  toppath [description]
 * @return {Boolean}         [description]
 */
function _isSubpath(subpath, toppath) {
	return subpath.match(new RegExp('^' + _regExcape(toppath)));
}
