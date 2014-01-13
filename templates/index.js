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
		'./': { exec: function (scope, cb) {
			scope.output.push('Running generator (<%= moduleName %>) @ `'+scope.rootPath+'`...');
			cb();
		} }
	}
};


// Output targets syntax:
//
// You can use params in your target paths:
// {
//   './:someScopeVariable/somethingStatic/:somethingDynamicAgain': '...'
// }


// Other directives:
//
// Generate a folder: (`folder`)
// './controllers': { folder: {} }
//
// Copy a file : (`copy`)
// './someTemplate.foo': { copy: path.resolve(__dirname, './someTemplate.foo') },
//
// Render an EJS template: (`ejs`)
// (note: the template doesn't have to end in *.ejs)
// './someTemplate.ejs': { ejs: path.resolve(__dirname, './someTemplate.ejs') },
//
// Run another generator:
// './controllers/:controllerName.js': 'controller'
//
