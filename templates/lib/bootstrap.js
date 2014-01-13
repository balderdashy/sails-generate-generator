/**
 * Module dependencies
 */

var _ = require('lodash');




/**
 * This bootstrap function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

	// validate custom scope variables required by this generator
	if (!scope.someRequiredThing) {
		return cb(new Error(
			'Missing scope variable: `someRequiredThing`\n' +
			'Please make sure it is specified and try again.'
		));
	}

	_.defaults(scope, {
		// default scope variables for this generator
	});

	cb();
};
