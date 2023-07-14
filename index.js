console.log('JS connected')

const userInput = document.getElementById('user');
const passwork= document.querySelector('#pass');
const form = document.querySelector('form');
const itemsBtn = document.getElementById("itemsBtn");
const items = document.getElementById('items');

const schoolItems = ["Wand", "books", "owl", "Dress robes"]

function login(event){
    event.preventDefault();
   // console.log("hit login function")
   alert(`${userInput.value} is now logged in`)
}

function displayItems(){
//console.log('hit display items function')
    items.innerHTML = '';
const list = document.createElement('ol');
schoolItems.forEach((item, )=> {
    const listItem = document.createElement('li')
    listItem.textContent = item;
    list.appendChild(listItem);
})
items.appendChild(list)
}

form.addEventListener('submit', login);
itemsBtn.addEventListener('click', displayItems);