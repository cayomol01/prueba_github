const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    page1: "./src/pages/page1/page1.js",
    page2: "./src/pages/page2/page2.js",
    page3: "./src/pages/page3/page3.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle_sin_babel"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/page1/page1.html",
      filename: 'page1.html',
      chunks: ['page1']
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/page2/page2.html",
      filename: 'page2.html',
      chunks: ['page2']
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/page3/page3.html",
      filename: 'page3.html',
      chunks: ['page3']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};
