module.exports = {
  //define entry point
  entry: {
    home: './src/home.script.js',
    book: './src/book.script.js',
    checkout: './src/checkout.script.js',
    nav: './src/nav.script.js',
  },

  //define output point
  output: {
    path: `${__dirname}/public/src`,
    filename: '[name].bundle.js',
  },

  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         exclude: /(node_modules)/,
  //         loader: 'babel-loader',
  //         query: {
  //           presets: ['@babel/preset-env'],
  //         },
  //       },
  //       // {
  //       //   test: /\.scss$/,
  //       //   loader: 'style-loader!css-loader!sass-loader',
  //       // },
  //     ],
  //   },
};
