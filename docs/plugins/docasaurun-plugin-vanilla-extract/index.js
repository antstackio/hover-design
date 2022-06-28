const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  plugins: [new VanillaExtractPlugin()],
};

module.exports = function (_, { id, ...options }) {
  return {
    name: "docusaurus-plugin-vanilla-extract",
    configureWebpack(_, isServer, utils) {
      return {
        plugins: [new VanillaExtractPlugin()],
      };
    },
  };
};
