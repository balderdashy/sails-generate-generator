/**
 * Module dependencies
 */

var path = require('path');



/**
 * <%= moduleName %>
 *
 * Usage:
 * `sails generate <%= generatorName %>`
 *
 * @type {Object}
 */
module.exports = {

	bootstrap: require('./lib/bootstrap'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (<%= moduleName %>) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

