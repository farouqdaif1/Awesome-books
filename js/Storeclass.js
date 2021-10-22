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
  static removeBooks(id) {
    const item = document.getElementById(`${id}`);
    const btn = document.querySelectorAll('.delete');
    const books = Store.getBooks();
    btn.forEach((book, index) => {
      if (book.id === item.id) {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        index -= 1;
      }
    });
  }
}
