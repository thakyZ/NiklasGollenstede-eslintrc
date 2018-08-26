'use strict';

const { off, error, unCC, cloneOnto, } = require('./utils');

module.exports = cloneOnto(require('./base'), {

	globals: require('globals').node, // see https://github.com/sindresorhus/globals/blob/master/globals.json#L1001

	rules: unCC({
		strict: error('global'), // require `'use strict';` in the top scope, since it is wrapped in a function anyway
		noImplicitGlobals: off(), // allow declarations in the top scope, since it is wrapped in a function anyway
	}),

});
