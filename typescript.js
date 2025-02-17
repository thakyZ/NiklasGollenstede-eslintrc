import { off, error, warn, cloneOnto, } from './_utils.js';
import base from './base.js';
import eslintTs from 'typescript-eslint';

const _export = [cloneOnto(base, {

	languageOptions: {
		parser: eslintTs.parser,
		parserOptions: {
			project: './tsconfig.json',
			tsconfigRootDir: process.cwd(),
		},
		plugins: [
			eslintTs.plugin,
		],
	},

	}),
	{ // TypeScript specific rules
		files: [ '*.ts', '*.tsx', ],
		rules: {

			/// relaxing JS rules
			'no-return-assign': off(), // (types should catch this)
			'no-dupe-class-members': off(), // (triggers on overloads)
			'no-redeclare': off(), // (misfires on values vs types, namespaces vs classes, etc.)
			'strict': off(), // (implicit in TS)
			'no-undef': off(), // (TS is way better at this)
			'no-implicit-globals': off(), // (there are no implicit globals in TS modules)
			'eqeqeq': off(), // (types should be clear)
			'no-sparse-arrays': off(), // (for destructuring of tuples)

			'@typescript-eslint/adjacent-overload-signatures': error(),
			'@typescript-eslint/array-type': error({ default: 'array', }),
			'@typescript-eslint/await-thenable': off(),
			'@typescript-eslint/ban-ts-comment': error({ 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description', 'ts-nocheck': 'allow-with-description', 'ts-check': 'allow-with-description', }),
			'@typescript-eslint/ban-types': error({ types: {
				Object: { message: 'Avoid using the `Object` type. Did you mean `object`?', },
				Function: false, // { message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.', },
				Boolean: { message: 'Avoid using the `Boolean` type. Did you mean `boolean`?', },
				Number: { message: 'Avoid using the `Number` type. Did you mean `number`?', },
				String: { message: 'Avoid using the `String` type. Did you mean `string`?', },
				Symbol: { message: 'Avoid using the `Symbol` type. Did you mean `symbol`?', },
			}, }),
			'@typescript-eslint/consistent-type-assertions': error(),
			'@typescript-eslint/dot-notation': off(),
			'@typescript-eslint/explicit-module-boundary-types': error(),
			'@typescript-eslint/naming-convention': off(),
			'@typescript-eslint/no-array-constructor': error(), 'no-array-constructor': off(),
			'@typescript-eslint/no-empty-function': error(), 'no-empty-function': off(),
			'@typescript-eslint/no-empty-interface': error(),
			'@typescript-eslint/no-explicit-any': off(),
			'@typescript-eslint/no-extra-non-null-assertion': error(),
			'@typescript-eslint/no-extra-semi': error(), 'no-extra-semi': off(),
			'@typescript-eslint/no-floating-promises': error(),
			'@typescript-eslint/no-for-in-array': error(),
			'@typescript-eslint/no-implied-eval': error(),
			'@typescript-eslint/no-inferrable-types': off(),
			'@typescript-eslint/no-misused-new': off(),
			'@typescript-eslint/no-misused-promises': error(),
			'@typescript-eslint/no-namespace': off(),
			'@typescript-eslint/no-non-null-assertion': off(),
			'@typescript-eslint/no-parameter-properties': off(),
			'@typescript-eslint/no-this-alias': off(),
			'@typescript-eslint/no-unnecessary-type-assertion': error(),
			'@typescript-eslint/no-unsafe-assignment': off(),
			'@typescript-eslint/no-unsafe-call': error(),
			'@typescript-eslint/no-unsafe-member-access': error(),
			'@typescript-eslint/no-unsafe-return': error(),
			'@typescript-eslint/no-unused-expressions': error({ allowShortCircuit: true, allowTernary: true, }), 'no-unused-expressions': off(),
			'@typescript-eslint/no-unused-vars': warn({ argsIgnorePattern: '^_|^(global|exports|event)$', }), 'no-unused-vars': off(),
			'@typescript-eslint/no-use-before-define': off(),
			'@typescript-eslint/no-var-requires': off(),
			'@typescript-eslint/prefer-as-const': error(),
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': off(),
			'@typescript-eslint/prefer-namespace-keyword': error(),
			'@typescript-eslint/prefer-regexp-exec': error(),
			'@typescript-eslint/require-await': off(),
			'@typescript-eslint/triple-slash-reference': error({ path: 'always', types: 'prefer-import', lib: 'always', }),
			'@typescript-eslint/unified-signatures': off(),

			// not sure if these are productive
			'@typescript-eslint/restrict-plus-operands': off(),
			'@typescript-eslint/restrict-template-expressions': off(),
			'@typescript-eslint/unbound-method': off(),

		//	'@typescript-eslint/no-non-null-asserted-optional-chain': error(), // this causes a live-lock or infinite loop
		},
	},
];
export default _export;
