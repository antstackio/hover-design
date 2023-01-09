const OFF = 0;
const ERROR = 2;

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "./base",
  ],
  rules: {
    "react/react-in-jsx-scope": OFF,
    "jsx-a11y/accessible-emoji": ERROR,
    "react/prop-types": OFF,
  },
};
