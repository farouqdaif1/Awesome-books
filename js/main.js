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
  if (book.Author.length > 0 && book.title.length > 0) {
    UI.addBookToList(book);
    // Add book to  local sorage
    Store.addBooks(book);
    // clear field
    UI.clear();
  } else {
    alert('please fill all the inputs');
  }
});
// Event :Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from local storage
  Store.removeBooks(e.target.id);
  // remove book from the UI
  UI.deletBook(e.target);
  // Store.removeBooks(e.target.previousElementSibling.previousElementSibling.textContent);
});
// Event :open Menue button
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.nav-ul').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('hide');
});
// Event: close menue button
document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('hide');
  document.querySelector('.nav-ul').classList.toggle('active');
});
// Event: to be in list page
document.querySelector('.b-list').addEventListener('click', () => {
  document.querySelector('.nav-ul').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('hide');
  document.querySelector('.form-b').style.display = 'none';
  document.querySelector('.m1').style.display = 'none';
  document.querySelector('.ls-b').style.display = 'block';
  document.querySelector('.contact_info').style.display = 'none';
});
// Event: to be in Add list page
document.querySelector('.A-list').addEventListener('click', () => {
  document.querySelector('.nav-ul').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('hide');
  document.querySelector('.m1').style.display = 'block';
  document.querySelector('.form-b').style.display = 'block';
  document.querySelector('.ls-b').style.display = 'none';
  document.querySelector('.contact_info').style.display = 'none';
});
// Event: to be in contact  page
document.querySelector('.c-list').addEventListener('click', () => {
  document.querySelector('.nav-ul').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('hide');
  document.querySelector('.contact_info').style.display = 'block';
  document.querySelector('.ls-b').style.display = 'none';
  document.querySelector('.form-b').style.display = 'none';
  document.querySelector('.m1').style.display = 'none';
});
// Event: to be in list page
document.querySelector('.b-list1').addEventListener('click', () => {
  document.querySelector('.form-b').style.display = 'none';
  document.querySelector('.m1').style.display = 'none';
  document.querySelector('.ls-b').style.display = 'block';
  document.querySelector('.contact_info').style.display = 'none';
});
// Event: to be in Add list page
document.querySelector('.A-list1').addEventListener('click', () => {
  document.querySelector('.m1').style.display = 'block';
  document.querySelector('.form-b').style.display = 'block';
  document.querySelector('.ls-b').style.display = 'none';
  document.querySelector('.contact_info').style.display = 'none';
});
// Event: to be in contact  page
document.querySelector('.c-list1').addEventListener('click', () => {
  document.querySelector('.contact_info').style.display = 'block';
  document.querySelector('.ls-b').style.display = 'none';
  document.querySelector('.form-b').style.display = 'none';
  document.querySelector('.m1').style.display = 'none';
});
const date = document.querySelector('.date');
const lux = window.luxon;
const { DateTime } = lux;
const localTime = DateTime.local();
date.innerHTML = DateTime.fromISO(localTime).toLocaleString(DateTime.DATETIME_MED);