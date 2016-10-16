/**
 * Module dependencies
 */

var util = require('util')
  , path = require('path')
  , _ = require('lodash');
_.defaults = require('merge-defaults');




/**
 * Configure the generator.
 *
 * @param  {[type]}   scope [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
module.exports = function(scope, cb) {

  // Look at arguments and adjust rootPath if necessary.
  if (scope.args) {
    if (scope.args[0]) {
      scope.rootPath = path.resolve(scope.rootPath, scope.args[0]);
      if (!scope.generatorType) {
        scope.generatorType = scope.args[0];
      }
    }
  }


  if (!scope.generatorType) {
    return cb(new Error(
      'Missing argument: Please provide a `generatorType` for this generator.\n' +
      '(should refer to the core generator to override, e.g. `controller`).'
    ));
  }


  _.defaults(scope, {
    github:{
      // i.e.
      // Would you mind telling me your username on GitHub?
      // (or favorite pseudonym)
      username: process.env.USER || 'anonymous'
    },
    year: (new Date()).getFullYear(),
    moduleName: 'sails-generate-' + (''+scope.generatorType).toLowerCase(),
  });

  _.defaults(scope, {
    website: util.format('http://github.com/%s', scope.github.username),
    author: util.format('%s',scope.github.username) || 'a node.js/sails user',
    repository: {
      type: 'git',
      url: util.format('git://github.com/%s/sails-generate-%s.git',scope.github.username)
    }
  });

  cb();
};
