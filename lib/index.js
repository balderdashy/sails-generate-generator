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

  before: require('./before'),

  after: function (scope, cb) {
    // TODO: install this generator's dependencies
    cb();
  },

  targets: {
    './index.js':           { template: 'index.js.template' },
    './README.md':          { template: 'README.md' },
    './.gitignore':         { template: 'gitignore' },
    './.jshintrc':          { template: '.jshintrc' },
    './.editorconfig':      { template: '.editorconfig' },
    './package.json':       { template: 'package.json' },
    './templates/.gitkeep': { template: '.gitkeep' },
  }
};
