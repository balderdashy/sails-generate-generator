var path = require('path');
var rootrequire = require('root-require');


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

	id: rootrequire('package.json').name,

	bootstrap: rootrequire('lib/bootstrap'),

	targets: {
		'./:name/templates/README.md':{ template: path.resolve(__dirname, './templates/templates.readme.md') },
		'./:name/lib/index.js':       { template: path.resolve(__dirname, './templates/index.js') },
		'./:name/lib/bootstrap.js':   { template: path.resolve(__dirname, './templates/bootstrap.js') },
		'./:name/test/runner.js':     { template: path.resolve(__dirname, './templates/test.runner.js') },
		'./:name/test/mocha.opts':    { template: path.resolve(__dirname, './templates/mocha.opts') },
		'./:name/CONTRIBUTING.md':    { template: path.resolve(__dirname, './templates/CONTRIBUTING.md') },
		'./:name/FAQ.md':             { template: path.resolve(__dirname, './templates/FAQ.md') },
		'./:name/LICENSE.md':         { template: path.resolve(__dirname, './templates/LICENSE') },
		'./:name/README.md':          { template: path.resolve(__dirname, './templates/README.md') },
		'./:name/.gitignore':         { template: path.resolve(__dirname, './templates/.gitignore') },
		'./:name/.jshintrc':          { template: path.resolve(__dirname, './templates/.jshintrc') },
		'./:name/.editorconfig':      { template: path.resolve(__dirname, './templates/.editorconfig') },
		'./:name/package.json':       { template: path.resolve(__dirname, './templates/package.json') }
	}
};


// TODO: implement a validation/usage feedback interface like this:
// usage: 'sails generate generator :generatorType --author',



