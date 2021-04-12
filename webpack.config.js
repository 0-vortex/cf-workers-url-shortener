module.exports = {
  target: 'webworker',
  context: __dirname,
  entry: './src/index.js',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.handlebars/i,
        loader: 'handlebars-loader',
      },
    ],
  },
};
