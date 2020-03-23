const express = require('express');
const app = express();
const port = 3000;
const { Pool, Client } = require('pg');
// const books = require('./controller/books');
const BookstoreClient = require('./BookstoreClient');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

// listening to port
app.listen(process.env.PORT || port, () =>
  console.log(`App listening on port ${process.env.PORT || port}!`)
);
