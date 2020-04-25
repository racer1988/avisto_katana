module.exports = {
  // To specify a custom tsconfig location
  chainWebpack: config => {
    config
      .plugin("fork-ts-checker")
      .tap(args => {
        args[0].tsconfig = "./client/tsconfig.json";
        return args;
      });
  }
};