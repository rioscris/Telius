const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { env } = require("process");
const isDevBuild = !(env && env.prod);
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /ClientApp/,
        use: "awesome-typescript-loader?silent=true",
      },
      {
        test: /\.css$/,
        use: isDevBuild
          ? [
              "style-loader",
              "typings-for-css-modules-loader?namedExport&modules",
            ]
          : ExtractTextPlugin.extract({
              use: "typings-for-css-modules-loader?minimize&namedExport&modules",
            }),
      },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=1000" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
