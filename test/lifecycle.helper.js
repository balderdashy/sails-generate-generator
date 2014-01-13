/**
 * Module dependencies.
 */

var reportback = require('reportback')()
	, sailsgen = require('sails-generate')
	, fsx = require('fs-extra')
	, path = require('path')
	, Generator = require('../lib');



var TEST_SCOPE = {
	rootPath: __dirname,
	name: 'generator'
};


// Failsafe to avoid accidentally deleting your hard disk
// (limits highest permissible path for rimrafing)
var EXPECTED_OUTPUT_PATH = path.resolve(TEST_SCOPE.rootPath, TEST_SCOPE.name);
var PATH_CEILING = path.resolve(__dirname);

if ( !_isSubPath(EXPECTED_OUTPUT_PATH, PATH_CEILING) ) {
	throw new Error(
		'Invalid path: `'+EXPECTED_OUTPUT_PATH+'`\n'+
		'(must be within `'+PATH_CEILING+'`)\n'
	);
}



/**
 * Test helpers
 * @type {Object}
 */

module.exports = {
	setup: function (done) {
		done = reportback.extend(done);

		_cleanup(reportback.extend({
			success: function () {
				sailsgen(Generator, TEST_SCOPE, done);
			}
		}));
	},

	teardown: function (done) {
		done = reportback.extend(done);
		_cleanup(done);
	}
};


/**
 * Clean up (delete) whatever is at the expected output path
 * of this generator.
 *
 * @param  {Function} cb [description]
 * @return {[type]}      [description]
 */
function _cleanup (cb) {
	fsx.remove(EXPECTED_OUTPUT_PATH, cb);
}

/**
 * Convert a string into the escaped string that would
 * match it in a RegExp.
 *
 * @param  {[type]} str [description]
 * @return {String}
 */
function _regExcape(str) {
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}


/**
 * Verify that `subpath` starts with `toppath`
 *
 * @param  {[type]}  subpath [description]
 * @param  {[type]}  toppath [description]
 * @return {Boolean}         [description]
 */
function _isSubPath(subpath, toppath) {
	var regex = new RegExp('^' + _regExcape(toppath));
	console.log('\n'+regex+'\n');
	return subpath.match(regex);
}
