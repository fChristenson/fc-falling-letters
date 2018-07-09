const path = require("path");

module.exports = {
  entry: path.join(__dirname, "app.js"),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["babel-preset-react"]
        }
      }
    ]
  }
};
