// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = {
  // 개발환경
  mode: "development",
  // 애플리케이션 진입점
  entry: "./src/index.js",
  // 번들된 파일을 저장할 경로
  output: {
    filename: "bundle.[hash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // loader 설정
  module: {
    rules: [
      {
        // es6 바벨 관련 loader
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
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
