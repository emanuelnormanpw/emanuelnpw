import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", ".eslintrc.cjs", "node_modules"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
    ],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "unused-imports": unusedImports,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      eqeqeq: "off",
      "max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2,
          comments: 80,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["warn", "always"],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "semi-spacing": ["error"],
      "space-unary-ops": ["error", { words: true, nonwords: false }],
      "computed-property-spacing": ["error", "never"],
      "keyword-spacing": ["error"],
      semi: ["warn", "always"],
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-use-before-define": [0],

      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/no-explicit-any": ["error"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-empty-function": [
        "error",
        { allow: ["arrowFunctions"] },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "function", format: ["camelCase", "PascalCase"] },
        {
          selector: "parameter",
          format: ["camelCase", "PascalCase", "snake_case"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameterProperty",
          format: ["camelCase", "PascalCase", "snake_case"],
        },
        { selector: "typeLike", format: ["PascalCase", "UPPER_CASE"] },
      ],

      "unused-imports/no-unused-imports": "error",
    },
  },
]);
