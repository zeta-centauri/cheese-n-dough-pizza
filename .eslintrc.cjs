module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react/react-in-jsx-scope': 'off',

        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],
    },
};
