import globals from "globals";
import pluginJs from "@eslint/js";
import nodeJs from "./node-js.js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser, }, },
  pluginJs.configs.recommended,
  nodeJs,
];