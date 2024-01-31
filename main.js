let arrayOfObjects = [];
let item = document.querySelector('.item');
console.log(item);
let list = document.querySelector('.list');
console.log(list);
let checkbox;
const form = document.querySelector("form");
//=====================

form.onsubmit = function Add(e) {
    e.preventDefault();
    console.log(item.value);
    arrayOfObjects.push(item.value);
    
    list.innerHTML = arrayOfObjects.map(function (e) {
        return `
            <li>
                <input type="checkbox" name="item" class="checkbox" >
                <span class="item">${e}</span>
            </li>
    `;
    }).join(' ');

    item.value = '';
    let todos = document.querySelectorAll(".list li");
    checkbox = document.querySelectorAll("li .checkbox");

    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("change", function(e) {
            e.target.nextElementSibling.classList.toggle("checked")
        });
        
    }
};