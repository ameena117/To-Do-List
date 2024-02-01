let arrayOfObjects = [];
let item = document.querySelector('.item');
console.log(item);
let list = document.querySelector('.list');
console.log(list);
const form = document.querySelector("form");
let todos = localStorage.getItem("todos");;
console.log(todos);
arrayOfObjects.push(todos);
console.log(arrayOfObjects);
if (arrayOfObjects[0] == null) {
    arrayOfObjects = [];
}

else {
    console.log(arrayOfObjects);
    arrayOfObjects = arrayOfObjects[0].split(",");
    console.log(arrayOfObjects);
    list.innerHTML = arrayOfObjects.map(function (e) {
        return `
        <li>
            <input type="checkbox" name="item" class="checkbox" >
            <span class="item">${e}</span>
        </li>
`;
    }).join(' ');
}

form.onsubmit = function Add(e) {
    e.preventDefault();
    arrayOfObjects.push(item.value);

    list.innerHTML = arrayOfObjects.map(function (e) {
        return `
            <li>
                <input type="checkbox" name="item" class="checkbox" >
                <span class="item">${e}</span>
            </li>
    `;
    }).join(' ');

    //to add in localStorage
    localStorage.setItem("todos", arrayOfObjects);
    item.value = '';
    let checkbox = document.querySelectorAll("li .checkbox");
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("change", function (e) {
            e.target.nextElementSibling.classList.toggle("checked")
        });
    }
};
