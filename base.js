'use strict';

const { off, error, warn, unCC, } = require('./utils');

module.exports = ({
	extends: 'eslint:recommended',
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'script',
		ecmaFeatures: {
			impliedStrict: false,
		},
	},
	env: {
		es6: true,
	},
	globals: {
		console: false,
	},
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

		consistentReturn: error({ treatUndefinedAsUnspecified: true, }),
		curly: error(),
		dotLocation: error('property'),
		noCaller: error(),
		noCaseDeclarations: error(),
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
