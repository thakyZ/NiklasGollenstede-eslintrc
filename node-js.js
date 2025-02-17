import { off, error, unCC, cloneOnto, } from './_utils.js';
import base from './base.js';
import globals from 'globals';

const _export = cloneOnto(base, {

	languageOptions: {
		globals: globals.node, // see https://github.com/sindresorhus/globals/blob/master/globals.json#L165
	},

	rules: unCC({
		strict: error('global'), // require `'use strict';` in the top scope, since it is wrapped in a function anyway
		noImplicitGlobals: off(), // allow declarations in the top scope, since it is wrapped in a function anyway
	}),

});
export default _export;