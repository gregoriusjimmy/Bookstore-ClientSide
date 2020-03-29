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
};
