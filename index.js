var _ = require('lodash');


/**
 * sails-generate-generator
 * 
 * Usage:
 * `sails generate generator :arg0`
 *
 * @scope {String} arg0    [required, name of generator to create]
 * 
 * @type {Object}
 */
module.exports = {

	id: require('./package.json').name,

	// TODO: implement a validation/usage feedback interface like this:
	// usage: 'sails generate generator :generatorType --author',

	bootstrap: function (scope, cb) {
		var name = scope.arg0;

		if (!name) {
			return cb( new Error(
			'Missing argument: Please provide a name for this generator.\n'+
			'Should override an existing generator, e.g. `controller`.'
			) );
		}

		_.defaults(scope, {
			moduleName: 'sails-generate-'+name,
			author: 'A Node.js/Sails.js Contributor',
			year: (new Date()).getFullYear()
		});

		cb();
	},

	targets: {
		'./:arg0': { folder: {} }
	}
};
