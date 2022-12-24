module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'jsx-a11y/no-static-element-interactions': 'off',
        'max-len': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-restricted-exports': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'linebreak-style': ['error', 'unix'],
        'no-console': 'off',
        'no-unused-vars': 'off',
    },
};
