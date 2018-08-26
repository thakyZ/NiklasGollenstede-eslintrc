'use strict';

/**
 * For locations with mixed scripts, e.g. as a "global" fallback, relax some rules.
 */

const { off, /*error,*/ /*warn,*/ unCC, cloneOnto, } = require('./utils');

module.exports = cloneOnto(require('./base'), {

	globals: Object.assign({
		// declare browser stuff explicitly
		// nothing else
	}, require('globals').node), // they are all pretty unlikely to be used unintentionally, see https://github.com/sindresorhus/globals/blob/master/globals.json#L1001

	rules: unCC({
		noConsole: off(),
		strict: off(),
		noImplicitGlobals: off(),
	}),

});
