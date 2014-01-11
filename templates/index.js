/**
 * sails-generate-generator
 * 
 * Usage:
 * `sails generate generator foo`
 * 
 * @type {Object}
 */
module.exports = {
	targets: {
		'.': {
			exec: function (scope, cb) {
				console.log('TODO: generate stuff starting @ `'+scope.relPath+'`...');
				cb();
			}
		}
	}
};
