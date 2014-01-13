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

	// validate custom scope variables which
	// are required by this generator, e.g.
	if ( !scope.someRequiredThing ) {
		// return cb(new Error(
		// 	'Missing scope variable: `someRequiredThing`\n' +
		// 	'Please make sure it is specified and try again.'
		// ));
	}


	// mixin default scope variables, e.g.
	_.defaults(scope, {
		someThing: 'someValueForIt'
	});

	// trigger callback with no error to proceed
	cb();
};
