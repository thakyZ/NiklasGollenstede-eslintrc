'use strict';

const { off, error, warn, unCC, } = require('./_utils.js');

module.exports = ({

	extends: undefined, // let's be explicit
	env: { }, // again, explicit

	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: [ ".cjs", ".mjs", ".jsm", ],
	},

	globals: Object.assign({
		console: false,
		clearTimeout: false,
		setTimeout: false,
	}, require('globals').builtin), // see https://github.com/sindresorhus/globals/blob/master/globals.json#L165

	rules: unCC({ // rules as of 2018-08-26

		// "Possible Errors" (all)
		forDirection: off(), // don't enforce "for" loop update clause moving the counter in the right direction.
		getterReturn: error(), // enforce return statements in getters
		noAsyncPromiseExecutor: error(), // disallow using an async function as a Promise executor (argument to the Promise constructor)
		noAwaitInLoop: off(), // don't disallow await inside of loops (as this is sometimes actually useful)
		noCompareNegZero: error(), // disallow comparing against -0
		noCondAssign: error(), // disallow assignment operators in conditional expressions
		noConsole: warn({ allow: [ 'error', 'warn', 'info', ], }), // disallow the use of console (but allow explicit 'error', 'warn' and 'info')
		noControlRegex: warn(), // disallow control characters in regular expressions (i.e. ASCII < 0x20)
		noConstantCondition: warn({ checkLoops: false, }), // disallow constant expressions in conditions
		noDebugger: error(), // disallow the use of debugger
		noDupeArgs: error(), // disallow duplicate arguments in function definitions
		noDupeKeys: error(), // disallow duplicate keys in object literals
		noDuplicateCase: error(), // disallow duplicate case labels
		noEmpty: error({ allowEmptyCatch: true, }), // disallow empty block statements (except catch)
		noEmptyCharacterClass: warn(), // disallow empty character classes in regular expressions
		noExAssign: off(), // don't disallow reassigning exceptions in catch clauses (as this is only relevant in IE < 8)
		noShadow: off(), // don't disallow variable declarations from shadowing variables declared in the outer scope
		noExtraBooleanCast: error(), // disallow unnecessary boolean casts
		noExtraParens: off(), // don't disallow unnecessary parentheses
		noExtraSemi: error(), // disallow unnecessary semicolons
		noFuncAssign: error(), // disallow reassigning function declarations
		noInnerDeclarations: off(), // don't disallow variable or function declarations in nested blocks
		noInvalidRegexp: error(), // disallow invalid regular expression strings in RegExp constructors
		noIrregularWhitespace: error(), // disallow irregular whitespace outside of strings and comments
		noMisleadingCharacterClass: error(), // disallow characters which are made with multiple code points in character class syntax
		noObjCalls: error(), // disallow calling global object properties as functions (JSON, Math, Reflect)
		noPrototypeBuiltins: error(), // disallow calling some Object.prototype methods directly on objects (putting them there was a mistake in the first place)
		noRegexSpaces: error(), // disallow multiple spaces in regular expressions
		noSparseArrays: error(), // disallow sparse arrays
		noTemplateCurlyInString: error(), // disallow template literal placeholder syntax in regular strings
		noUnexpectedMultiline: error(), // disallow confusing multiline expressions
		noUnreachable: error(), // disallow unreachable code after return, throw, continue, and break statements
		noUnsafeFinally: error(), // disallow control flow statements in finally blocks
		noUnsafeNegation: error(), // disallow negating the left operand of relational operators (`!` directly in front of first operand of `in` or `instanceof`)
		requireAtomicUpdates: off(), // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		useIsnan: error(), // require calls to isNaN() when checking for NaN
	//	validJsdoc: error({
	//		prefer: { returns: 'return', }, // TODO: ...
	//		preferType: { bool: 'boolean', Boolean: 'boolean', }, // TODO: ...
	//		requireReturn: false, // lets hope this allows async functions to implicitly return Promises
	//		requireParamDescription: true, requireReturnDescription: true, requireParamType: true,
	//	}), // enforce valid JSDoc comments
		validTypeof: error(), // enforce comparing typeof expressions against valid strings
		radix: error(), // require Radix Parameter (for `parseInt`)

		// "Best Practices"
		consistentReturn: error({ treatUndefinedAsUnspecified: false, }), // require return statements to either always or never specify values
		curly: error(), // enforce consistent brace style for all control statements
		dotLocation: error('property'), // enforce consistent newlines before and after dots
		dotNotation: off(), // don't enforce dot notation whenever possible
		eqeqeq: error('allow-null'), // require the use of === and !==
		noCaller: error(), // disallow the use of arguments.caller or arguments.callee
		noEmptyPattern: off(), // don't disallow empty destructuring patterns
		noCaseDeclarations: error(), // disallow lexical declarations in case clauses (which don't have an implicit scope)
		noDivRegex: error(), // disallow division operators explicitly at the beginning of regular expressions
		noExtraLabel: warn(), // disallow unnecessary labels
		noFallthrough: error(), // disallow fallthrough of case statements (i.e. without `break`, use `/* falls through */` for exceptions)
		noGlobalAssign: warn(), // disallow assignments to native objects or read-only global variables
		noImplicitGlobals: error(), // disallow variable and function declarations in the global scope
		noImpliedEval: error(), // disallow the use of eval()-like methods
		noInvalidThis: error(), // disallow this keywords outside of classes or class-like objects
		noMultiStr: error(), // disallow multiline strings (use template strings instead)
		noOctal: error(), // disallow octal literals
		noOctalEscape: error(), // disallow octal escape sequences in string literals
		noProto: error(), // disallow the use of the __proto__ property (bit in object literals it is ok)
		noRedeclare: error({ builtinGlobals: false, }), // disallow variable redeclaration
		noReturnAssign: error(), // disallow assignment operators in return statements (ambiguous with `===`)
		noReturnAwait: error(), // disallow unnecessary return await
		requireAwait: off(), // disallow async functions which have no await expression
		noSelfAssign: error(), // disallow assignments where both sides are exactly the same
		noThrowLiteral: error(), // disallow throwing literals as exceptions
		noUnusedExpressions: error({ allowShortCircuit: true, allowTernary: true, }), // disallow unused expressions (but `a && b()` or `a ? b() : c()` is ok)
		noUnusedLabels: error(), // disallow unused labels
		noUselessEscape: error(), // disallow unnecessary escape characters
	//	noWarningComments: warn({ terms: [ 'todo', 'fixme', 'xxx', ], location: 'start', }), // disallow specified warning terms in comments (this could be really useful later in a project)
		preferPromiseRejectErrors: error(), // require using Error objects as Promise rejection reasons
		wrapIife: error('inside'), // require parentheses around immediate function invocations

		// "Strict Mode"
		strict: error(), // require strict mode directives

		// "Variables"
		noDeleteVar: error(), // disallow deleting variables
		noUndef: error(), // disallow the use of undeclared variables unless mentioned in /*global */ comments
		noUndefInit: off(), // don't disallow initializing variables to undefined
		noUnusedVars: warn({ argsIgnorePattern: '^_|^(global|exports|event)$', caughtErrorsIgnorePattern: '^_$', }), // disallow unused variables

		// "Stylistic Issues"
		commaDangle: error({ arrays: 'always', objects: 'always', imports: 'always', exports: 'always', functions: 'ignore', }),
		noMixedSpacesAndTabs: error('smart-tabs'),
		semi: error('always'),
		// TODO: there are many more rules here

		// "ECMAScript 6"
		constructorSuper: error(), // require super() calls in constructors
		noClassAssign: error(), // disallow reassigning class members
		noConfusingArrow: off(), // don't disallow arrow functions where they could be confused with comparisons
		noConstAssign: error(), // disallow reassigning const variables
		noDupeClassMembers: error(), // disallow duplicate class members
		noDuplicateImports: error(), // disallow duplicate module imports
		noNewSymbol: error(), // disallow `new` operators with the `Symbol` object
		noThisBeforeSuper: error(), // disallow `this`/`super` before calling `super()` in constructors
		noVar: error(), // require `let` or `const` instead of `var`
		preferArrowCallback: error({ allowNamedFunctions: true, }), // require using arrow functions for callbacks
		preferConst: warn({ destructuring: 'all', }), // require `const` declarations for variables that are never reassigned after declared
	//	preferDestructuring: error({ array: false, object: true, }), // require destructuring from arrays and/or objects
		requireYield: off(), // don't require generator functions to contain `yield`
		restSpreadSpacing: error('never'),
		preferRestParams: off(), // don't suggest using the rest parameters instead of `arguments`
		preferSpread: off(), // don't suggest using spread syntax instead of `.apply()`
	}),

});
