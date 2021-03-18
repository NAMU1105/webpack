// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;
const path = require("path");

module.exports = {
  // production, development, none 3가지의 옵션이 존재
  // 개발환경
  mode: "development",
  // 애플리케이션 진입점
  entry: "./src/index.tsx",
  // entry: {
  //   kb: ["babel-polyfill", "./src/index.tsx"],
  // },
  // 번들된 파일을 저장할 경로
  // 기본값은 ./dist/main.js
  output: {
    filename: "bundle.[hash].js",
  },
  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  // loader 설정
  module: {
    rules: [
      {
        // es6 바벨 관련 loader
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        // html loader
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true, // 코드 최적화를 하는 옵션
            },
          },
        ],
      },
    ],
  },
  // 플러그인
  plugins: [
    // html 관련 plugin
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],

  // 개발 서버 설정
  // devServer 의 다른 옵션들: https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: "localhost",
    port: port,
    open: true, // open page when start
  },
};
