module.exports = {
  target: 'webworker',
  context: __dirname,
  entry: './src/index.js',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.handlebars/i,
        loader: 'handlebars-loader',
      },
    ],
  },
};
