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
}

module.exports = Bookstore;
