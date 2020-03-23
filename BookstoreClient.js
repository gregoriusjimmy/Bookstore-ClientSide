class BookstoreClient {
  static async getBooks() {
    let response = await fetch(
      'https://tokobuku-cihuy.herokuapp.com/api/books'
    );
    let data = await response.json();
    return data;
  }
}

module.exports = BookstoreClient;
