const path = require("path");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
