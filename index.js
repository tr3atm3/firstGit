// Add input element inside form, before button, to take fruit description
const fruitDes = document.createElement("input");
const form = document.querySelector("form");
const button = document.querySelector("button");
const fruitToAdd = document.querySelector("#fruit-to-add");
const fruits = document.querySelector(".fruits");
form.insertBefore(fruitDes, button);
// Show the fruit description in italics on the next line
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (fruitDes.value !== "") {
    const para = document.createElement("p");
    para.innerHTML = fruitToAdd.value + ":" + fruitDes.value;
    para.style.fontStyle = "italic";
    form.appendChild(para);
    const fruitToList = document.createElement("li");
    fruitToList.className = "fruit";
    fruitToList.innerHTML =
      fruitToAdd.value + '<button class="delete-btn">x</button>';
    fruits.appendChild(fruitToList);
  } else {
  }
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
  event.preventDefault();
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  for (let item of fruitItems) {
    const currentFruit = item.firstChild.textContent.toLowerCase();
    if (currentFruit.indexOf(textEntered) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  }
});
