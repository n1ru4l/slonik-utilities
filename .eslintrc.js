"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["jest"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  overrides: [
    {
      files: "src/**/*.spec.ts",
      env: {
        "jest/globals": true
      },
      extends: ["plugin:jest/recommended"]
    }
  ]
};
