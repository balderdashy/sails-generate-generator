var _ = require('lodash');


/**
 * @param  {[type]}   scope [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
module.exports = function(scope, cb) {

	if (!scope.name) {
		return cb(new Error(
			'Missing argument: Please provide `scope.name` for this generator.\n' +
			'(should refer to the core generator to override, e.g. `controller`).'
		));
	}

	_.defaults(scope, {
		moduleName: 'sails-generate-' + scope.name,
		author: 'a Node.js/Sails.js Contributor',
		year: (new Date()).getFullYear(),
		entity: scope.name
	});

	cb();
};
