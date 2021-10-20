// Event : Display a books
import Store from './Storeclass.js';
import UI from './UIclass.js';
import Book from './Bookclass.js';

document.addEventListener('DOMContentLoaded', UI.DisplayBook);

// Event :Add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // instansiate book
  const book = new Book(title, author);
  //   Add book to UI
  UI.addBookToList(book);
  // Add book to  local sorage
  Store.addBooks(book);
  // clear field
  UI.clear();
});

// Event :Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from local storage
  Store.removeBooks(e.target.id);
  // remove book from the UI
  UI.deletBook(e.target);
  // Store.removeBooks(e.target.previousElementSibling.previousElementSibling.textContent);
});