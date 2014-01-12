/**
 * <%= moduleName %>
 * 
 * Usage:
 * `<%= moduleName %> :arg0 :arg1 ...`
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
