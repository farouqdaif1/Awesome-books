// Storeclass : Handel the storage
export default class Store {
  // get books
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  // Add books
  static addBooks(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // remove books
  static removeBooks(booktitle) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title === booktitle) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
