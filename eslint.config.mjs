import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import jest from "@jest/globals";

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  jest,
];
