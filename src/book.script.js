const Bookstore = require('./Bookstore');
const utils = require('./utils');

const addToCartBtn = document.getElementById('add-to-cart');
const bookId = addToCartBtn.getAttribute('bookId');
addToCartBtn.addEventListener('click', () => {
  Bookstore.getBookById(bookId).then(book => {
    Bookstore.addItem(book);
  });
});
