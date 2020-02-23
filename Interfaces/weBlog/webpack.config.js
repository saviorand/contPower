const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;

module.exports = {
  entry: {
    app: "./src/index.js",
    page: "./src/page.js",
  },
  plugins: [

  new HtmlWebpackPlugin({
    title: "Index",
    inject: false,
    chunks: ['app'],
    template: "dist/index.html",
  }),

  new HtmlWebpackPlugin({
    title: "Page",
    inject: false,
    template: "dist/page.html",
    chunks: ['page'],
    filename: "dist/postPage.html",

  }),
  new LinkTypePlugin()

  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader", 
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
        "url-loader",
        ],
      },
    ],
  },

  // Optional for webpack-dev-server
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
}