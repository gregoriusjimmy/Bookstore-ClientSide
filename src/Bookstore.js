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
  static getItems() {
    return JSON.parse(window.localStorage.getItem('myCart'));
  }
  static addItem(cartItemToAdd) {
    let oldCart = Bookstore.getItems() || [];
    let existingCartItem = oldCart.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
      oldCart = oldCart.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      cartItemToAdd.quantity = 1;
      oldCart.push(cartItemToAdd);
    }
    window.localStorage.setItem('myCart', JSON.stringify(oldCart));
    window.location.reload();
  }

  static removeItem(cartItemToRemove) {
    let oldCart = Bookstore.getItems();
    let existingCartItem = oldCart.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
      Bookstore.clearItem(cartItemToRemove);
    } else {
      oldCart = oldCart.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      window.localStorage.setItem('myCart', JSON.stringify(oldCart));
    }
    window.location.reload();
  }
  static clearItem(cartItemToClear) {
    let oldCart = Bookstore.getItems();
    let newCart = oldCart.filter(
      cartItem => cartItem.id !== cartItemToClear.id
    );
    window.localStorage.setItem('myCart', JSON.stringify(newCart));
    window.location.reload();
  }
}

module.exports = Bookstore;
