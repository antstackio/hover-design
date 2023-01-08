const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["import"],
  rules: {
    "no-console": ERROR
  }
};
