const path = require("path");

const config = {
  mode: "development",
  entry: {
    app: "./public/index.js",
    db: "./public/db.js"
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
};
module.exports = config;
