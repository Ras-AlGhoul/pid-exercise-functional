module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": ["eslint:recommended", "airbnb", "prettier", "plugin:node/recommended"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-name": "off",
        "no-process-exit": "off",
        "object-shorthand":"off",
        "class-methods-use-this":"off"
    }
};
