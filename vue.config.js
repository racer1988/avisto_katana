const path = require("path");

module.exports = {
  //outputDir: path.resolve(__dirname,"./client/dist"),
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src/"),
      }
    },
  },

  // To specify a custom tsconfig location
  chainWebpack: config => {
    config
      .plugin("fork-ts-checker")
      .tap(args => {
        args[0].tsconfig = "./client/tsconfig.json";
        return args;
      });
  },


};
