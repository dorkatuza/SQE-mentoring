import globals from "globals";

export default [
  {
    files: ["**/*.js"],  // Apply to all JavaScript files
    languageOptions: {
      ecmaVersion: 2020,  // Use a modern ECMAScript version
      sourceType: "module",  // Set as ES6 module
      globals: globals.browser,  // Include browser global variables
    },
  },
  {
    files: ["**/*.cjs"],  // Apply to CommonJS files
    languageOptions: {
      ecmaVersion: 2020,  // Use a modern ECMAScript version
      sourceType: "commonjs",  // Set as CommonJS module
    },
  },
  {
    files: ["**/*.mjs"],  // Apply to ES modules
    languageOptions: {
      ecmaVersion: 2020,  // Use a modern ECMAScript version
      sourceType: "module",  // Set as ES6 module
    },
  },
];