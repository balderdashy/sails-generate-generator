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
		'./:name':                    { folder: {} },
		'./:name/templates/README.md':{ template: _pathTo('templates.readme.md') },
		'./:name/lib/index.js':       { template: _pathTo('index.js') },
		'./:name/lib/bootstrap.js':   { template: _pathTo('bootstrap.js') },
		'./:name/test/runner.js':     { template: _pathTo('test.runner.js') },
		'./:name/test/mocha.opts':    { template: _pathTo('mocha.opts') },
		'./:name/CONTRIBUTING.md':    { template: _pathTo('CONTRIBUTING.md') },
		'./:name/FAQ.md':             { template: _pathTo('FAQ.md') },
		'./:name/LICENSE.md':         { template: _pathTo('LICENSE') },
		'./:name/README.md':          { template: _pathTo('README.md') },
		'./:name/.gitignore':         { template: _pathTo('.gitignore') },
		'./:name/.jshintrc':          { template: _pathTo('.jshintrc') },
		'./:name/.editorconfig':      { template: _pathTo('.editorconfig') },
		'./:name/package.json':       { template: _pathTo('package.json') }
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



