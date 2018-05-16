'use strict';

const { off, /*error,*/ /*warn,*/ unCC, cloneOnto, } = require('./utils');

module.exports = cloneOnto(require('./base'), {
	env: {
		browser: true,
	},
	globals: {
		global: false,
		define: false,
		require: false,
		exports: false,
		module: false,
		__dirname: false,
		__filename: false,
		console: false,
		process: false,
	},
	rules: unCC({
		noConsole: off(),
		strict: off(),
		noImplicitGlobals: off(),
	}),
});
