const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let APP_DIR = path.resolve(__dirname, "./src");
let BUILD_DIR = path.join(__dirname, "/build");

const webpackConfig = () => {
  return {
    entry: APP_DIR + "/index.tsx",
    output: {
      path: BUILD_DIR,
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(s*)css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpg|gif|ico|jpeg|png)$/i,
          use: ["file-loader"],
        },
      ],
    },
    devServer: {
      port: 3001,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};

module.exports = webpackConfig;
