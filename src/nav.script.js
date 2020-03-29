const Bookstore = require('./Bookstore');
const utils = require('./utils');

let cart = document.getElementsByClassName('cart-icon')[0];
let cartDropdown = document.getElementById('cart-dropdown');
cart.addEventListener('click', () => {
  if (cartDropdown.style.display === 'none') {
    cartDropdown.style.display = 'block';
  } else {
    cartDropdown.style.display = 'none';
  }
});

let cartItems = document.getElementById('cartItems');
let myCart = Bookstore.getItems();
if (myCart) {
  myCart.forEach(book => {
    let cartItem = document.createElement('div'),
      bookCover = document.createElement('img'),
      itemDetails = document.createElement('div'),
      title = document.createElement('span'),
      price = document.createElement('span');

    cartItem.classList.add('cart-item');
    itemDetails.classList.add('item-details');

    bookCover.src = book.imageLinks;
    title.textContent = book.title;
    price.textContent = `${book.quantity} x Rp${utils.formatMoney(book.price)}`;
    itemDetails.appendChild(title);
    itemDetails.appendChild(price);
    cartItem.appendChild(bookCover);
    cartItem.appendChild(itemDetails);
    cartItems.appendChild(cartItem);
  });
} else {
  let emptyMessage = document.createElement('span');
  emptyMessage.classList.add('empty-message');
  emptyMessage.textContent = 'Your cart is empty';
  cartItems.appendChild(emptyMessage);
}
