// UI class : Handel UI task
import Store from './Storeclass.js';

export default class UI {
  // Display Book
  static DisplayBook() {
    const books = Store.getBooks();
    books.forEach((book) => { UI.addBookToList(book); });
  }

  // Add book to list
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const div = document.createElement('div');
    div.innerHTML = `<p>${book.title}</p>
    <p>${book.Author}</p>
    <button class="delete">Remove</button>
    <hr>
    <br>`;
    list.appendChild(div);
  }

  // Reomve book
  static deletBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  // clear field
  static clear() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
