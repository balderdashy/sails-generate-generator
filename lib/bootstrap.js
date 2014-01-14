/**
 * Module dependencies
 */

var util = require('util')
	, _ = require('lodash');
_.defaults = require('merge-defaults');




/**
 * Configure the generator.
 *
 * @param  {[type]}   scope [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
module.exports = function(scope, cb) {

	if (!scope.generatorName) {
		return cb(new Error(
			'Missing argument: Please provide `scope.generatorName` for this generator.\n' +
			'(should refer to the core generator to override, e.g. `controller`).'
		));
	}

	_.defaults(scope, {
		github:{
			// i.e.
			// Would you mind telling me your username on GitHub?
			// (or favorite pseudonym)
			username: 'balderdashy'
		},
		year: (new Date()).getFullYear(),
		moduleName: 'sails-generate-' + (''+scope.generatorName).toLowerCase(),
	});

	_.defaults(scope, {
		author: util.format('%s',scope.github.username) || 'a node.js/sails user',
		repository: {
			type: 'git',
			url: util.format('git://github.com/%s/sails-generate-%s.git',scope.github.username)
		}
	});

	cb();
};
