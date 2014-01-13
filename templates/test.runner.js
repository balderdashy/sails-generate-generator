/**
 * For now, this is just a dummy test that runs the generator
 * (so you can try it out.)
 */

var report = require('reportback')().extend();
var Generator = require('../gen');
require('sails-generate')(Generator, scope, report);
