import recommendedConfig from './recommended';
import tsEslint from "typescript-eslint";
import angular from "angular-eslint";
import ngrx from '@ngrx/eslint-plugin/v9'

export default tsEslint.config(
  {
    name: "devmy-angular-ts-recommended",
    files: ["**/*.ts"],
    extends: [
      ...ngrx.configs.all,
      ...angular.configs.tsRecommended,
      recommendedConfig,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
);