import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ignores: ["node_modules/**"],
  },
  {
    files: [
      "**/*.{js,jsx,ts,tsx}",
      "src/**/*.js",
      "src/**/*.ts",
      "src/**/*.jsx",
      "src/**/*.tsx",
    ],
  },
  {
    rules: {
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
