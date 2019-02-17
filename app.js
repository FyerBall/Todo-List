let todoList = document.querySelector(".todo--lists");
let itemValue = document.getElementById("new_item");
let todoListItems = document.querySelector(".todo--list_item");
let today = document.querySelector(".todo-day");
let date = document.querySelector(".todo-date");

let items = [];

getDate();

// Check if there is an item to add to the list
document.getElementById("add").addEventListener("click", function() {
  // let itemValue = document.getElementById("new_item").value;
  const value = itemValue.value;
  if (value <= 0) {
    document.querySelector(".feedback").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".feedback").style.visibility = "hidden";
    }, 2000);
  } else {
    // Add item
    addItem(value);
    // Clear input after adding an item
    itemValue.value = "";
    // Add to Array
    items.push(itemValue);
    // console.log(items);
  }
});

// Add item to the list
function addItem(value) {
  // Create a li
  const li = document.createElement("li");
  li.classList.add("todo--list_item");
  li.innerHTML = `
      <input type="checkbox">
      <span class="items">${value}</span>
      <button class="btn-delete"><i class="far fa-trash-alt fa-2x"></i></button>
      <button class="btn-edit"><i class="fas fa-edit fa-2x"></i></button>`;
  todoList.appendChild(li);
}

// Get the dates
function getDate() {
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  today.textContent = day;
}
