/**
 * Module dependencies
 */

var _ = require('lodash');




/**
 * This boostrap function is run right before your generator.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

	// make sure you have everything you need
	// (validate required scope variables)
	if ( !scope.someRequiredThing ) {
		return cb(new Error(
			'Missing scope variable: `someRequiredThing`\n' +
			'Please make sure it is specified and try again.'
		));
	}

	_.defaults(scope, {
		// your default scope variables here
	});

	cb();
};
