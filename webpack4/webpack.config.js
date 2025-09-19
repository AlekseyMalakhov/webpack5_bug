const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { main: "./src/app.js", react: "react/cjs/react.production.min.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system",
  },
  externals: ["react"],
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index.html", to: "" }],
    }),
  ],
  module: {
    rules: [{ parser: { system: false } }],
  },
};
