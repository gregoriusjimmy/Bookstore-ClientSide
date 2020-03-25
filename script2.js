const Bookstore = require('./Bookstore');
const utils = require('./utils');

const addToCartBtn = document.getElementById('add-to-cart');
const bookId = addToCartBtn.getAttribute('bookId');
addToCartBtn.addEventListener('click', () => {
  Bookstore.getBookById(bookId).then(book => {
    book.price = utils.formatMoney(book.price);
    Bookstore.addItem(book);
    location.reload();
  });
});
