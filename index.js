var path = require('path');


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

	id: require('./package.json').name,

	bootstrap: require('./lib/bootstrap'),

	targets: {
		'./:arg0/templates/README.md':{ template: path.resolve(__dirname, './templates/templates.readme.md') },
		'./:arg0/index.js':          { template: path.resolve(__dirname, './templates/index.js') },
		'./:arg0/CONTRIBUTING.md':   { template: path.resolve(__dirname, './templates/CONTRIBUTING.md') },
		'./:arg0/FAQ.md':            { template: path.resolve(__dirname, './templates/FAQ.md') },
		'./:arg0/LICENSE.md':        { template: path.resolve(__dirname, './templates/LICENSE') },
		'./:arg0/README.md':         { template: path.resolve(__dirname, './templates/README.md') },
		'./:arg0/.gitignore':        { copy: path.resolve(__dirname, './templates/.gitignore') },
		'./:arg0/package.json':      { template: path.resolve(__dirname, './templates/package.json') }
	}
};


// TODO: implement a validation/usage feedback interface like this:
// usage: 'sails generate generator :generatorType --author',



