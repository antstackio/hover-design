const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config) {
    config.plugins.push(vanillaExtractPlugin());
    return config;
  },
};
