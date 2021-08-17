module.exports = {
  root: true,
  extends: [
    'react-app',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/recommended',
    'airbnb-base/rules/imports',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
  ],
  plugins: [
    'prettier',
    'react-hooks',
    '@typescript-eslint',
    'formatjs',
    'eslint-plugin-jsx-a11y',
    'jest',
    'testing-library',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    Styles: false,
    JSX: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 'error',
    'object-shorthand': ['error', 'always'],
    'dot-notation': 'error',
    'array-callback-return': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'react/no-unknown-property': 'error',
    'react/jsx-key': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/no-shadow': [
      'warn',
      {
        builtinGlobals: false,
        hoist: 'all',
        allow: [],
      },
    ],
    curly: 'error',
    'formatjs/enforce-description': 'warn',
    'formatjs/no-multiple-whitespaces': 'warn',

    /** alphabetize destructured import members - `import {b, a, c} from ...` to `import {a, b, c} from ...`*/
    'sort-imports': ['error', { ignoreDeclarationSort: true }],

    /********************************************************/
    /* airbnb-base/rules/imports overrides & customizations */
    /* on top of https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js */
    /********************************************************/

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        pathGroups: [
          {
            pattern: 'react',
            position: 'before',
            group: 'external',
          },
          {
            pattern:
              '{state,utils,components,enums,hooks,pages,queries,remote,styles,types,ui,fixtures}/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],

    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],

    'no-console': 'warn',
    'no-debugger': 'warn',
  },

  overrides: [
    {
      "files": [ "*.test.*"],
      "rules": {
        'array-callback-return': 'off',
      }
    },
    {
      "files": [ "serviceWorker.ts"],
      "rules": {
        'no-console': 'off',
      }
    }
  ]
};