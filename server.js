const express = require('express');
const app = express();
const port = 3000;

// const books = require('./controller/books');
const Bookstore = require('./Bookstore');
const utils = require('./utils');
const cors = require('cors');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
// register mustache
app.engine('html', mustacheExpress());
// app.engine('html', mustacheExpress('views/partials', '.html'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('home', { nav: 'nav', footer: 'footer' });
});

app.get('/category', (req, res) => {
  const query = req.query.q;
  let filteredBooks = [];
  Bookstore.getBooks().then(data => {
    data.forEach(book => {
      const bookCategory = book.categories.toLowerCase();
      if (query.toLowerCase().includes(bookCategory)) {
        book.price = utils.formatMoney(book.price);
        filteredBooks.push(book);
      }
    });
    res.render('category', {
      nav: 'nav',
      footer: 'footer',
      data: filteredBooks,
      query: query.split(' ')[0],
    });
  });
});
app.get('/books', (req, res) => {
  const query = req.query.search.toLowerCase();
  let filteredBooks = [];
  Bookstore.getBooks().then(data => {
    data.forEach(book => {
      const bookTitle = book.title.toLowerCase();
      const bookAuthors = book.authors.toLowerCase();
      if (bookTitle.includes(query) || bookAuthors.includes(query)) {
        book.price = utils.formatMoney(book.price);
        filteredBooks.push(book);
      }
    });
    res.render('books', {
      nav: 'nav',
      footer: 'footer',
      data: filteredBooks,
      query: req.query.search,
    });
  });
});
app.get('/book/:bookId', (req, res) => {
  Bookstore.getBookById(req.params.bookId).then(data => {
    res.render('book', {
      nav: 'nav',
      footer: 'footer',
      data: {
        ...data,
        price: utils.formatMoney(data.price),
        publishedDate: utils.convertDate2(data.publishedDate),
      },
    });
  });
});

// listening to port
app.listen(process.env.PORT || port, () =>
  console.log(`App listening on port ${process.env.PORT || port}!`)
);
