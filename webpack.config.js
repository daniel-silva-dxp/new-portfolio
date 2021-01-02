const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dirname } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: [path.join(__dirname, "src/js", "index")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Daniel Silva &bull; Front End Developer e UX/UI Design",
      template: path.join(__dirname, "src", "index.html"),
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
