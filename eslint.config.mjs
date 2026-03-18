import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  // import.meta.dirname requires Node.js v20.11.0+ or v21.2.0+
  baseDirectory: import.meta.dirname, 
  recommendedConfig: js.configs.recommended,
});

export default [
  // 1. Use FlatCompat to handle legacy "extends"
  ...compat.extends("next/core-web-vitals", "plugin:@typescript-eslint/recommended"),

  // 2. Define your custom overrides
  {
    files: ["**/*.{js,ts,tsx}"],
    // "plugins" here must be an OBJECT mapping name to the plugin instance, 
    // but compat.extends often handles @typescript-eslint for you.
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];