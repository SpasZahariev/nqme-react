const webpack = require("webpack");
//allows me to work with paths... duh
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//this way babel knows we are in the prod environment
process.env.NODE_ENV = "production";

module.exports = {
  mode: "production",
  target: "web",
  //this source map takes longer to compute bus is of higher quality
  devtool: "source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.tsx",
      favicon: "./src/favicon.ico",
      //this gets rid of as many stuff as possible
      //little performace enchasments to keep code lean
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("cssnano")],
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
