import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

module.exports = {
  plugins: [new VanillaExtractPlugin()],
};

module.exports = function (_: never, options: VanillaExtractPlugin) {
  return {
    name: "docusaurus-plugin-vanilla-extract",
    configureWebpack(_: never, isServer: boolean, utils: any) {
      return {
        plugins: [new VanillaExtractPlugin(options)],
      };
    },
  };
};
