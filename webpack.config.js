module.exports = {
  entry: './app/app.jsx',
  devtool: 'source-map',
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
