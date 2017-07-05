## A collection of eslint config files for different environments

## Example setup

Add a variation of this
```json
"devDependencies": {
	"babel-eslint": "7.1.1",
	"eslint": "3.14.1",
	"eslintrc": "NiklasGollenstede/eslintrc#69b4957"
},
"scripts": {
	"lint": "eslint --ignore-path .gitignore ."
},
"eslintConfig": {
	"extends": "./node_modules/eslintrc/browser.js"
}
```
to the `package.json` in the project root and optionally delete the `package-lock.json` there.
Then install with `npm install` and run with `npm run lint` or use eslint from the cli or an editor.
