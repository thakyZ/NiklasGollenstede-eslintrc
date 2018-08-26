
# My personal eslint configuration

When I can choose, I use these JavaScript coding standards in all my projects.
It's meant to support (and enforce) the most modern version of JS that is currently natively available (either in browsers or node.js) and is rather strict and explicit, e.g.:

 * most rules are set to `error` and errors should never be committed
 * semicolons, dangling commas and curly brackets are required
 * some dangerously ambiguous constructs require extra parentheses
 * `const`, `let` and in some situations arrow functions are required
 * ... and more, see `base.js` for most rules


## Example setup

Add a variation of this
```json
"devDependencies": {
	"babel-eslint": "^8.2.6",
	"eslint": "^5.4.0",
	"eslintrc": "NiklasGollenstede/eslintrc#<commit>"
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


## Environments

 * `base.js`: Rather strict rules as the basis for all other configurations.
 * `general.js`: Somewhat loosened rules to match all environments fairly well. For locations with mixed scripts, e.g. as a "global" fallback.
 * `node.js`: Some additional rules and globals for `node.js` scripts.
 * `browser.js`: Adjustments for a (modern) browser environment. Does not define many global variables.
 * `web-ext.js`: meant for WebExtensions. Currently the same as the browser configuration.

`utils.js` just contains some ... well utilities to write down the rules a bit more clearly.
