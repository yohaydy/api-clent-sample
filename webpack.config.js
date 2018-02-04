const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(SRC_DIR, "index.js"),
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      // JS
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: "babel-loader"
      },
      // HTML
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      // CSS
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
            "postcss-loader"
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, "index.html")
    })
  ]
};
