module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'max-len': ['error', { 'code': 120 }],
        'indent': ['error', 2],
        "max-lines": ['error', { 'max': 250, 'skipComments': false, 'skipBlankLines': false }]
    }
};
