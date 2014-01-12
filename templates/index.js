/**
 * <%= moduleName %>
 * 
 * Usage:
 * `<%= moduleName %>`
 * 
 * @type {Object}
 */
module.exports = {
	targets: {
		'.': { exec: function (scope, cb) {
			scope.output.push('Running generator (<%= moduleName %>) @ `'+scope.rootPath+'`...');
			cb();
		} }
	}
};
