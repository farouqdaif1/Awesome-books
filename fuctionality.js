// Array to store the data objects
const colliction = [];
const div = document.querySelector(".collection");
const Submit = document.querySelector("#do");
// let i = 0;
const btnRemove = document.querySelectorAll(".remove");

// function to catch the data from input field
function Setlocalstorage() {
  const Author = document.querySelector("#author");
  const Title = document.querySelector("#title");
  localStorage.setItem("Authors", Author.value);
  localStorage.setItem("titles", Title.value);
}
// function to but the data inside the Array
function SetDataColl() {
  const Aut = localStorage.getItem("Authors");
  const ti = localStorage.getItem("titles");
  const data = { name: Aut, book: ti };
  colliction.push(data);
}

function remove(index) {
if(colliction.length>0){
  colliction.splice(index, 1);
  display();
}
 
}
// function to display the content
function display() {
  div.innerHTML = '';
  for(let i =0; i<colliction.length;i++){
    div.innerHTML += `
    <div class=data>
    <p>${colliction[i].book}</p>
    <p>${colliction[i].name}</p>
    <button  onclick="remove(${i});">Remove</button>
    <hr>
    </div>`;
  }

  // i += 1;
  // remove();
}

display()
// btn 1
// btn 2
// btn 3

// colliction = [{1},{2}]

// btnRemove.addEventListener('click', remove);
Submit.addEventListener("click", (e) => {
  e.preventDefault();
  Setlocalstorage();
  SetDataColl();
  display();
});
