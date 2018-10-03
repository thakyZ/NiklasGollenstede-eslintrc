'use strict';

const { /*off,*/ error, /*warn,*/ unCC, cloneOnto, } = require('./_utils.js');

module.exports = cloneOnto(require('./base'), {

	env: { }, // declare the globals explicitly (avoid `name` and stuff like that)

	globals: {
		define: false,
		// always use local require
		document: false,
		location: false,
	},

	rules: unCC({
		strict: error('function'), // basically require a self-invoking-function wrapper
	}),

});
