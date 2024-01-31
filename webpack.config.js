const BuildPlugin = require("./src/index.js");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: __dirname + "/test/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "js/main.js",
    clean: true,
  },
  plugins: [
    new NodePolyfillPlugin(),
    new htmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
    }),
    new BuildPlugin({
      zipName: 'test-dist.zip',
      level: 9
    }),
  ],
};
console.log(process.env.NODE_ENV);
