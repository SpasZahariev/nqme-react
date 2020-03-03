// const path = require("path");

// module.exports = {
//   entry: "./src/index.tsx",
//   devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: [/node_modules/, /working_build/]
//       }
//     ]
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"]
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist")
//   }
// };
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
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    //Display bundle stats
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index",
      favicon: "./src/logo.svg",
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
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ["ts-loader", "eslint-loader"]
      },
      {
        test: /(\.scss)$/,
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
