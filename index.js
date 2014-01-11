module.exports = {
	targets: {
		'.': {
			exec: function (scope, cb) {
				console.log('generate generator!');
				cb();
			}
		}
	}
};
