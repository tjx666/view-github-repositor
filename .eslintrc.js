const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'unicorn'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js', '.json'],
            },
        },
    },
    rules: {
        'import/extensions': OFF,
        'import/no-extraneous-dependencies': OFF,
        'import/no-unresolved': [WARN, { ignore: ['vscode'] }],
        'import/prefer-default-export': OFF,

        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/no-use-before-define': OFF,

        'unicorn/consistent-function-scoping': OFF,
        'unicorn/filename-case': OFF,
        'unicorn/import-style': OFF,
        'unicorn/no-abusive-eslint-disable': OFF,
        'unicorn/no-null': OFF,
        'unicorn/no-process-exit': OFF,
        'unicorn/no-reduce': OFF,
        'unicorn/prefer-module': OFF,
        'unicorn/prefer-node-protocol': OFF,
        'unicorn/prevent-abbreviations': OFF,

        'func-names': OFF,
        'lines-between-class-members': OFF,
        'no-bitwise': OFF,
        'no-cond-assign': OFF,
        'no-console': OFF,
        'no-param-reassign': OFF,
        'no-plusplus': OFF,
        'no-restricted-syntax': OFF,
        'no-underscore-dangle': OFF,
        'no-unused-expressions': OFF,
        'no-useless-constructor': OFF,
    },
    overrides: [
        {
            files: ['test/**/*.ts'],
            rules: {
                'import/prefer-default-export': OFF,
            },
        },
        {
            files: ['build/**/*.ts'],
            rules: {
                'import/no-extraneous-dependencies': OFF,
            },
        },
    ],
};
