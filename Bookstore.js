const fetch = require('node-fetch');

class Bookstore {
  static async getBooks() {
    let response = await fetch(
      'https://tokobuku-cihuy.herokuapp.com/api/books'
    );
    let data = await response.json();
    return data;
  }

  static async getBookById(bookId) {
    let response = await fetch(
      'https://tokobuku-cihuy.herokuapp.com/api/books/' + bookId
    );
    let data = await response.json();
    return data;
  }

  static addItem(item) {
    let oldCart = JSON.parse(window.localStorage.getItem('myCart')) || [];
    oldCart.push(item);
    window.localStorage.setItem('myCart', JSON.stringify(oldCart));
  }
  static getItem() {
    return JSON.parse(window.localStorage.getItem('myCart'));
  }
  static removeItem() {
    window.localStorage.removeItem('myCart');
  }
  static clearItem() {
    window.localStorage.clear();
  }
}

module.exports = Bookstore;
