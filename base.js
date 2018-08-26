'use strict';

const { off, error, warn, unCC, } = require('./utils');

module.exports = ({

	extends: undefined, // let's be explicit
	env: { }, // again, explicit

	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 9, // 2018
		sourceType: 'script',
		ecmaFeatures: {
			impliedStrict: false,
		},
	},

	globals: Object.assign({
		console: false,
	}, require('globals').es2017), // see https://github.com/sindresorhus/globals/blob/master/globals.json#L165

	rules: unCC({
		noConsole: warn({ allow: [ 'error', 'warn', 'info', ], }),
		strict: error(),
		noUndefInit: error(),
		noUnusedVars: warn({ argsIgnorePattern: '^_|^(global|exports|event)$', caughtErrorsIgnorePattern: '^_$', }),
		eqeqeq: error('allow-null'),
		noEmpty: error({ allowEmptyCatch: true, }),
		noEmptyPattern: off(),
		noExAssign: off(), // only relevant in IE < 8
		noTemplateCurlyInString: error(),
		noUnsafeNegation: error(),

		consistentReturn: error({ treatUndefinedAsUnspecified: false, }),
		curly: error(),
		dotLocation: error('property'),
		noCaller: error(),
		noCaseDeclarations: error(),
		noConstantCondition: warn({ checkLoops: false, }),
		noDivRegex: error(),
		noExtraLabel: warn(),
		noGlobalAssign: warn(),
		semi: error('always'),
		noImplicitGlobals: error(),
		noImpliedEval: error(),
		noInnerDeclarations: off(),
		noInvalidThis: error(),
		noMultiStr: error(),
		noOctalEscape: error(),
		noOctal: error(),
		noProto: error(),
		noReturnAssign: error(),
		noReturnAwait: error(),
		noThrowLiteral: error(),
		noUnusedExpressions: error({ allowShortCircuit: true, allowTernary: true, }),
		noUnusedLabels: error(),
		preferPromiseRejectErrors: error(),
		wrapIife: error('inside'),

		noMixedSpacesAndTabs: error('smart-tabs'),

		preferArrowCallback: error({ allowNamedFunctions: true, }),
		preferConst: warn({ destructuring: 'all', }),
		// preferDestructuring: error({ array: false, object: true, }),
		restSpreadSpacing: error('never'),
		commaDangle: error({ arrays: 'always', objects: 'always', imports: 'always', exports: 'always', functions: 'ignore', }),
		noVar: error(),
	}),

});
