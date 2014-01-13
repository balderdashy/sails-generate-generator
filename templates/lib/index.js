/**
 * Module dependencies
 */

var path = require('path')
	, rootrequire = require('root-require');




/**
 * <%= moduleName %>
 *
 * Usage:
 * `sails generate <%= generatorName %>`
 *
 * @type {Object}
 */

module.exports = {

	bootstrap: rootrequire('lib/bootstrap'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (<%= moduleName %>) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

