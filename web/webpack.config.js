var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
    html: './index.html'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file?name=images/[name].[ext]"
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin("app.css")
  ],

  devServer: {
    historyApiFallback: true
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  devtool: 'source-map',
}