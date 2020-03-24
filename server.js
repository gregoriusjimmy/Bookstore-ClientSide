const express = require('express');
const app = express();
const port = 3000;
const { Pool, Client } = require('pg');
// const books = require('./controller/books');
const Bookstore = require('./Bookstore');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const fetch = require('node-fetch');
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
  res.render('home', { nav: 'nav' });
});
app.get('/book/:bookId', (req, res) => {
  Bookstore.getBookById(req.params.bookId).then(data => {
    res.render('book', { nav: 'nav', data: data });
  });
});

// listening to port
app.listen(process.env.PORT || port, () =>
  console.log(`App listening on port ${process.env.PORT || port}!`)
);
