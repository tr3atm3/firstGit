const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
  newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';
  fruits.appendChild(newLi);
});

fruits.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});

const liList = document.querySelectorAll("li");
for (let list of liList) {
  const editBtn = document.createElement("button");
  const editText = document.createTextNode("edit");
  editBtn.appendChild(editText);
  editBtn.className = "edit-btn";
  list.appendChild(editBtn);
  console.log(list);
}
