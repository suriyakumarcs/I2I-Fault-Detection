const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    babel: "@babel/polyfill",
    app: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "public/js"),
    hashDigestLength: 10,
    filename: "[name].[hash].bundle.js"
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "public/index.html"),
      template: path.join(__dirname, "src/index.html")
    }),
    "@babel/plugin-proposal-class-properties"
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          babelrc: false,
          plugins: [
            "@babel/plugin-transform-regenerator",
            "@babel/plugin-proposal-object-rest-spread"
          ],
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }]
  }
};

module.exports = config;
