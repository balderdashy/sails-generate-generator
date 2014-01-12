var path = require('path');
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
		var entity = scope.arg0;

		if (!entity) {
			return cb( new Error(
			'Missing argument: Please provide a name for this generator.\n'+
			'Should override an existing generator, e.g. `controller`.'
			) );
		}

		_.defaults(scope, {
			moduleName: 'sails-generate-'+entity,
			author: 'a Node.js/Sails.js Contributor',
			year: (new Date()).getFullYear(),
			entity: entity
		});

		cb();
	},

	targets: {
		'./:arg0':                   { folder: {} },
		'./:arg0/index.js':          { ejs: path.resolve(__dirname, './templates/index.js') },
		'./:arg0/CONTRIBUTING.md':   { ejs: path.resolve(__dirname, './templates/CONTRIBUTING.md') },
		'./:arg0/FAQ.md':            { ejs: path.resolve(__dirname, './templates/FAQ.md') },
		'./:arg0/LICENSE.md':        { ejs: path.resolve(__dirname, './templates/LICENSE') },
		'./:arg0/README.md':         { ejs: path.resolve(__dirname, './templates/README.md') },
		'./:arg0/.gitignore':        { copy: path.resolve(__dirname, './templates/.gitignore') },
		'./:arg0/package.json':      { ejs: path.resolve(__dirname, './templates/package.json') }
	}
};
