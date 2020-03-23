const BookstoreClient = require('./BookstoreClient');
const utils = require('./utils');

// Fetch all books
BookstoreClient.getBooks().then(data => {
  console.log(data);
  let bookList = document.getElementById('book-list');
  data.forEach(book => {
    let bookCard = document.createElement('div'),
      bookCover = document.createElement('img'),
      cardBody = document.createElement('div'),
      bookTitle = document.createElement('h5'),
      bookAuthor = document.createElement('p'),
      bookPrice = document.createElement('span');

    bookCard.id = book.id;
    bookCard.style.width = '152px';
    bookCard.classList.add('card');
    bookCover.classList.add('card-img-top', 'book-cover', 'img-thumbnail');
    bookCover.src = book.imageLinks;
    cardBody.classList.add('card-body');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = book.authors;
    bookPrice.classList.add('book-price');
    bookPrice.textContent = `Rp${utils.formatMoney(book.price)}`;

    // wrapping up the card together
    cardBody.appendChild(bookTitle);
    cardBody.appendChild(bookAuthor);
    cardBody.appendChild(bookPrice);
    bookCard.appendChild(bookCover);
    bookCard.appendChild(cardBody);
    bookList.appendChild(bookCard);
  });
});

$('.carousel').carousel({
  interval: 4000,
});
