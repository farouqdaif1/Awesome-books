// UI class : Handel UI task
import Store from './Storeclass.js';

let z = 0;
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
    div.innerHTML = `
    <div>
    <p class="title">${book.title}</p>
    <p class="by">by</p>
    <p class="author">${book.Author}</p>
    </div>
    <button id="x${z += 1}" class="delete">Remove</button>
    <br>`;
    list.appendChild(div);
  }

  // Reomve book
  static deletBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
    z -= 1;
  }

  // clear field
  static clear() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
