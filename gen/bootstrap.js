var _ = require('lodash');


/**
 * @param  {[type]}   scope [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
module.exports = function(scope, cb) {
	var entity = scope.arg0;

	if (!entity) {
		return cb(new Error(
			'Missing argument: Please provide a name for this generator.\n' +
			'Should override an existing generator, e.g. `controller`.'
		));
	}

	_.defaults(scope, {
		moduleName: 'sails-generate-' + entity,
		author: 'a Node.js/Sails.js Contributor',
		year: (new Date()).getFullYear(),
		entity: entity
	});

	cb();
};
