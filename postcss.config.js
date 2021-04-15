module.exports = () => ({
  // parser: require("postcss-comment"),
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("autoprefixer"),
  ],
});
