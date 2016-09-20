/* debug */
const path = require('path');
console.log(__dirname);
module.exports = {
  entry: './h5/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015&presets[]=react',
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}


/* production */
/*const path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var DefinePlugin = require("webpack/lib/DefinePlugin");

module.exports = {
  entry: {
    bundle: './h5/app.js',
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new CommonsChunkPlugin('vendor',  'vendor.js'),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015&presets[]=react',
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}*/
