const Bookstore = require('./Bookstore');
const utils = require('./utils');

let items = Bookstore.getItems();
let total = 0;
checkoutItems = document.getElementById('checkout-items');
if (items) {
  items.forEach(item => {
    let checkoutItem = document.createElement('div');
    checkoutItem.classList.add('checkout-item');

    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    let itemImage = document.createElement('img');
    itemImage.src = item.imageLinks;
    imageContainer.appendChild(itemImage);

    let name = document.createElement('span');
    name.classList.add('name');
    name.textContent = item.title;

    let price = document.createElement('span');
    price.classList.add('price');
    price.textContent = `Rp${utils.formatMoney(item.price)}`;

    let quantity = document.createElement('span');
    quantity.classList.add('quantity');
    let quantityValue = document.createElement('span');

    let leftArrow = document.createElement('div');
    leftArrow.classList.add('arrow');
    leftArrow.textContent = '\u276C';
    leftArrow.addEventListener('click', () => {
      Bookstore.removeItem(item);
    });

    let rightArrow = document.createElement('div');
    rightArrow.classList.add('arrow');
    rightArrow.textContent = '\u276D';
    rightArrow.addEventListener('click', () => {
      Bookstore.addItem(item);
    });
    quantityValue.classList.add('quantity-value');
    quantityValue.textContent = item.quantity;
    quantity.appendChild(leftArrow);
    quantity.appendChild(quantityValue);
    quantity.appendChild(rightArrow);

    let removeBtn = document.createElement('div');
    removeBtn.classList.add('remove-button');
    removeBtn.innerText = '\u2715';
    removeBtn.addEventListener('click', () => {
      Bookstore.clearItem(item);
    });

    checkoutItem.appendChild(imageContainer);
    checkoutItem.appendChild(name);
    checkoutItem.appendChild(quantity);
    checkoutItem.appendChild(price);
    checkoutItem.appendChild(removeBtn);
    checkoutItems.appendChild(checkoutItem);

    total += item.price * item.quantity;
  });

  let totalContainer = document.getElementById('total');
  let totalText = document.createElement('span');
  totalText.textContent = `TOTAL: Rp${utils.formatMoney(total.toString())}`;
  totalContainer.appendChild(totalText);
}
