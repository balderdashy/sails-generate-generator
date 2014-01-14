/**
 * sails-generate-generator
 *
 * Usage:
 * `sails generate generator :type`
 *
 * @scope {String} type    [required, type of generator to create]
 *
 * @type {Object}
 */
module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	bootstrap: require('./bootstrap'),

	targets: {
		'./:generatorName':                    { folder: {} },
		'./:generatorName/bin/index.js':       { template: 'bin/index.js' },
		'./:generatorName/lib/index.js':       { template: 'lib/index.js' },
		'./:generatorName/lib/bootstrap.js':   { template: 'lib/bootstrap.js' },
		'./:generatorName/CONTRIBUTING.md':    { template: 'CONTRIBUTING.md' },
		'./:generatorName/FAQ.md':             { template: 'FAQ.md' },
		'./:generatorName/LICENSE.md':         { template: 'LICENSE' },
		'./:generatorName/README.md':          { template: 'README.md' },
		'./:generatorName/.gitignore':         { template: '.gitignore' },
		'./:generatorName/.jshintrc':          { template: '.jshintrc' },
		'./:generatorName/.editorconfig':      { template: '.editorconfig' },
		'./:generatorName/package.json':       { template: 'package.json' },
		'./:generatorName/templates/README.md':{ template: 'templates/README.md' },

		// Skip tests for now to keep it simple:
		// './:generatorName/test/runner.js':     { template: _pathTo('test/runner.js') },
		// './:generatorName/test/mocha.opts':    { template: _pathTo('test/mocha.opts') },
		// './:generatorName/test/helpers/lifecycle.js':  { template: _pathTo('test/helpers/lifecycle.js') },
	}
};
