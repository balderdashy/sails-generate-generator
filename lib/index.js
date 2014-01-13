/**
 * Module dependencies
 */

var path = require('path');
var rootrequire = require('root-require');


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

	bootstrap: rootrequire('lib/bootstrap'),

	targets: {
		'./:generatorName':                    { folder: {} },
		'./:generatorName/templates/README.md':{ template: _pathTo('templates/README.md') },
		'./:generatorName/lib/index.js':       { template: _pathTo('lib/index.js') },
		'./:generatorName/lib/bootstrap.js':   { template: _pathTo('lib/bootstrap.js') },
		'./:generatorName/test/runner.js':     { template: _pathTo('test/runner.js') },
		'./:generatorName/test/mocha.opts':    { template: _pathTo('test/mocha.opts') },
		'./:generatorName/test/helpers/lifecycle.js':  { template: _pathTo('test/helpers/lifecycle.js') },
		'./:generatorName/CONTRIBUTING.md':    { template: _pathTo('CONTRIBUTING.md') },
		'./:generatorName/FAQ.md':             { template: _pathTo('FAQ.md') },
		'./:generatorName/LICENSE.md':         { template: _pathTo('LICENSE') },
		'./:generatorName/README.md':          { template: _pathTo('README.md') },
		'./:generatorName/.gitignore':         { template: _pathTo('.gitignore') },
		'./:generatorName/.jshintrc':          { template: _pathTo('.jshintrc') },
		'./:generatorName/.editorconfig':      { template: _pathTo('.editorconfig') },
		'./:generatorName/package.json':       { template: _pathTo('package.json') }
	}
};


/**
 * Solve the path to a template
 * todo: pull into core `sails-generate` module
 *
 * @param  {String} templateRelPath
 * @return {String}           [canonical path to specified template]
 */
function _pathTo( templateRelPath ) {
	return path.resolve(__dirname, '../templates', templateRelPath);
}


// TODO: implement a validation/usage feedback interface like this:
// usage: 'sails generate generator :generatorType --author',



