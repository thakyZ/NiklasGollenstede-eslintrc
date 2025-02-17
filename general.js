/**
 * For locations with mixed scripts, e.g. as a "global" fallback, relax some rules.
 */

import { off, /*error,*/ /*warn,*/ unCC, cloneOnto, } from './_utils.js';
import base from './base.js';
import globals from 'globals';

const _export = cloneOnto(base, {

	languageOptions: {
		globals: Object.assign({
			// declare browser stuff explicitly
			// nothing else
		}, globals.node), // they are all pretty unlikely to be used unintentionally, see https://github.com/sindresorhus/globals/blob/master/globals.json#L1145
	},

	rules: unCC({
		noConsole: off(),
		strict: off(),
		noImplicitGlobals: off(),
	}),

});

export default _export;