import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: ['react', '@typescript-eslint', 'prettier'], extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ], },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);