const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  entry: "./client/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "client", "dist")
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          laoders: {
            css: [
              "vue-style-loader",
              {
                loader: "css-loader"
              }
            ]
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
