/**
 * <%= moduleName %>
 *
 * Usage:
 * `sails generate <%= generatorName %>`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	bootstrap: require('./bootstrap'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (<%= moduleName %>) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

