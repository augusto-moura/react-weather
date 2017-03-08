const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    sourceMapFilename: '[file].map',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'latest', 'stage-2'],
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
    }],
  },
};
