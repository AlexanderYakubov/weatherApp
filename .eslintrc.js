// .eslintrc.js example
// eslint-disable-next-line no-undef
module.exports = {
    ignorePatterns: ["dist/**/*"],
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
};
