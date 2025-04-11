import iTwinPlugin from "@itwin/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.ts"],
    ...iTwinPlugin.configs.iTwinjsRecommendedConfig,
    rules: {
      ...iTwinPlugin.configs.iTwinjsRecommendedConfig.rules,
      "@itwin/no-internal": "error"
    }
  },
];
