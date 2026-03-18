// eslint.config.mjs
export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],

    // Extend Next.js core rules + TypeScript recommended rules
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
    ],

    plugins: ["@typescript-eslint"],

    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // enables full TypeScript rules
      },
    },

    rules: {
      // Console warnings
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // Ignore unused variables starting with _
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // Turn off requiring explicit return types
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];