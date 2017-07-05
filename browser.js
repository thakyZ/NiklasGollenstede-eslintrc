'use strict';

const { off, error, warn, unCC, cloneOnto, } = require('./utils');

module.exports = cloneOnto(require('./base'), {
	env: {
		browser: true,
	},
	globals: {
		define: false,
		// always use local require
	},
	rules: unCC({
		strict: error('function'),
	}),
});
