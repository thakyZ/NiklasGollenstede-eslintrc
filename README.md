## My personal eslint config files for different environments

## Example setup

Add a variation of this
```json
"devDependencies": {
	"babel-eslint": "^8.2.6",
	"eslint": "^5.1.0",
	"eslintrc": "NiklasGollenstede/eslintrc#88b3327"
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
