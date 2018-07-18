'use strict';

const { off, error, warn, unCC, cloneOnto, } = require('./utils');

module.exports = cloneOnto(require('./base'), {
	globals: {
		global: false,
		require: false,
		exports: false,
		module: false,
		__dirname: false,
		__filename: false,
		console: false,
		process: false,
		Buffer: false,
	},
	rules: unCC({
		noConsole: warn({ allow: [ 'error', 'warn', 'info', 'debug', ], }),
		strict: error('global'),
		noImplicitGlobals: off(),
	}),
});
