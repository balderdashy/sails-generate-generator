/**
 * Module dependencies.
 */

var reportback = require('reportback')();
var Generator = require('../lib');
var sailsgen = require('sails-generate');




describe('generator', function () {

	before(function (cb) {
		var report = reportback.extend({
			success: cb,
			error: cb
		});

		sailsgen(Generator, {
			name: 'generator'
		}, report);
	});

	it('should work', function () {
		// For now, this just runs the generator so you can try it out.
	});

});
