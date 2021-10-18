// Array to store the data objects
const colliction = [];
const div = document.querySelector('.collection');
const Submit = document.querySelector('#do');
let i = 0;
const btnRemove = document.querySelectorAll('.remove');

// function to catch the data from input field
function Setlocalstorage() {
  const Author = document.querySelector('#author');
  const Title = document.querySelector('#title');
  localStorage.setItem('Authors', Author.value);
  localStorage.setItem('titles', Title.value);
}
// function to but the data inside the Array
function SetDataColl() {
  const Aut = localStorage.getItem('Authors');
  const ti = localStorage.getItem('titles');
  const data = { name: Aut, book: ti };
  colliction.push(data);
}
function remove(index) {
  colliction.splice(index, 1);
}
// function to display the content
function display() {
  div.innerHTML += `
        <div class=data>
        <p>${colliction[i].book}</p>
        <p>${colliction[i].name}</p>
        <input onclick="remove(${i});type="button" value="remove" id="remove${i}" class="remove">
        <hr>
        </div>`;
  i += 1;
  // remove();
}
// btn 1
// btn 2
// btn 3

// colliction = [{1},{2}]

// btnRemove.addEventListener('click', remove);
Submit.addEventListener('click', (e) => {
  e.preventDefault();
  Setlocalstorage();
  SetDataColl();
  display();
});
