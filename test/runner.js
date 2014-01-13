/**
 * Module dependencies.
 */

var reportback = require('reportback')();
var sailsgen = require('sails-generate');
var Generator = require('../lib');


describe('generator', function () {

	before(function (cb) {
		var report = reportback.extend(cb);

		sailsgen(Generator, {
			name: 'generator',
			rootPath: __dirname
		}, report);
	});

	it('should work', function () {
		// For now, this just runs the generator so you can try it out.
	});

});
