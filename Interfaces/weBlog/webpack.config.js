const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: "./src/index.js",
    page: "./src/page.js",
  },
  plugins: [
  new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),

  new HtmlWebpackPlugin({
    title: "Index",
    inject: 'head',
    chunks: ['app'],
    template: "dist/indexTemplate.html",
  }),

  new HtmlWebpackPlugin({
    title: "Page",
    inject: 'head',
    template: "dist/pageTemplate.html",
    chunks: ['page'],
    filename: "page.html",

  }),
  new LinkTypePlugin(),

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