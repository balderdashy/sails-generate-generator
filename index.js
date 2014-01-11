var util = require('util');
var _ = require('lodash');
var path = require('path');



/**
 * sails-generate-generator
 * 
 * Usage:
 * `sails generate generator foo`
 * 
 * @type {Object}
 */
module.exports = {

	bootstrap: function (scope, cb) {

		if ( !_.isArray(scope.args) ) {
			return cb(new Error('Invalid `scope.args` passed to generator: '+util.inspect(scope.args)));
		}

		// If no arg specified, use 'newGenerator' as the name:
		if ( !scope.args[0] || !_.isString(scope.args[0])) {
			scope.args[0] = 'newGenerator';
		}

		_.defaults(scope, {
			moduleName: 'sails-generate-'+scope.args[0],
			author: 'A Node.js/Sails.js Contributor',
			year: (new Date()).getFullYear()
		});

		// Where to create the generator
		_.merge(scope, {
			destPath: path.join(scope.destPath, scope.args[0])
		});
		cb();
	},

	targets: {
		'.': {
			exec: function (scope, cb) {
				console.log('TODO: generate stuff starting @ `'+scope.destPath+'`...');
				cb();
			}
		}
	}
};
