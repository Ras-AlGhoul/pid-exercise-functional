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
        "no-unused-vars": "off",
        "no-console": "off",
        "func-name": "off",
        "no-process-exit": "off",
        "object-shorthand":"off",
        "class-methods-use-this":"off",
        "no-undef": "off",
        "no-plusplus":"off",
        "no-param-reassign": "off",
        "no-return-assign": "off",
        "arrow-body-style": "off"
    }
};
