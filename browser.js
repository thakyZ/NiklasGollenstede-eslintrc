import { /*off,*/ error, /*warn,*/ unCC, cloneOnto, } from './_utils.js';
import base from './base.js';

const _export = cloneOnto(base, {

	languageOptions: {
		globals: {
			define: false,
			// always use local require
			document: false,
			location: false,
		},
	},

	rules: unCC({
		strict: error('function'), // basically require a self-invoking-function wrapper
	}),

});
export default _export;
