/**
 * Module dependencies.
 */

var reportback = require('reportback')()
	, sailsgen = require('sails-generate')
	, fsx = require('fs-extra')
	, path = require('path')
	, Generator = require('../lib');



//
// Constants
//
var ROOT_PATH = path.resolve(__dirname, '.test_output');
var GENERATOR_NAME = 'generator';
var EXPECTED_OUTPUT_PATH = path.resolve(ROOT_PATH, GENERATOR_NAME);
var CLEANUP_PATH = ROOT_PATH;


//
// Validate path against "ceiling"
// (failsafe to avoid accidentally deleting your hard disk
//  by limiting highest permissible path for rimrafing)
//
if ( !_isSubPath(CLEANUP_PATH, ROOT_PATH) ) {
	throw new Error(
		'Invalid cleanup path: `'+CLEANUP_PATH+'`\n'+
		'(must be within `'+ROOT_PATH+'`)\n'
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

				// Run generator using contrived scope
				sailsgen(Generator, {
					rootPath: ROOT_PATH,
					name: GENERATOR_NAME
				}, done);
			}
		}));
	},

	teardown: function (done) {
		done = reportback.extend(done);
		_cleanup(done);
	}
};




/**
 * Clean up (delete) whatever is at the ROOT_PATH
 * of this generator.
 *
 * @param  {Function} cb [description]
 * @return {[type]}      [description]
 */
function _cleanup (cb) {
	fsx.remove(ROOT_PATH, cb);
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
	return subpath.match(regex);
}
