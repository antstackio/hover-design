const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier" // Make sure this is the last
  ],
  plugins: ["import"],
  rules: {
    "no-console": ERROR
  }
};
