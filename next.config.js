/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = (phase, { defaultConfig }) => {
  //   console.log(defaultConfig);

  return {
    future: {
      webpack5: true,
    },

    webpack: (config, options) => {
      //   console.log(config);
      //   console.log(config.resolve.extensions);

      //   config.module.rules.push({
      // test: /\.mdx/,
      // use: [
      //   options.defaultLoaders.babel,
      //   {
      //     loader: "@mdx-js/loader",
      //     options: pluginOptions.options,
      //   },
      // ],
      //   });
      //   config.resolve.extensions = [".testtt"];
      //   console.log(config.resolve.extensions);

      // console.log(config);
      return config;
    },
  };
};
