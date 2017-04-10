const path = require('path'),
  PUBLIC = path.resolve(__dirname, 'public'),
  SRC = path.resolve(__dirname, 'src'),
  webpack = require("webpack");

const config = {
  entry: {
    main: [
      SRC + '/index.jsx',
      SRC + '/scss/style.scss'
    ]
  },
  output: {
    path: PUBLIC,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: SRC,
        options: {
          babelrc: false,
          presets: [
            ['es2015', {modules: false}],
            'react',
            'stage-2'
          ],
          "plugins": ["transform-decorators-legacy"]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
const isProd = (process.env.NODE_ENV === 'production');

if (isProd){
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;