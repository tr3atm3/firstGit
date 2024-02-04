// assignment1

const mainHeading = document.getElementById("main-heading");
const header = document.getElementById("header");
const basketHeading = document.getElementById("basket-heading");
const thanks = document.getElementById("thanks");
mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";
header.style.backgroundColor = "green";
header.style.borderBottom = "3px solid orange";
basketHeading.style.color = "green";
thanks.innerHTML = "<p>Please visit us again</p>";

// assignment2
const fruits = document.getElementsByClassName("fruit");
fruits[2].style.backgroundColor = "yellow";
for (let fruit of fruits) {
  fruit.style.fontWeight = "bold";
}

// assignment3
const lists = document.getElementsByTagName("li");
lists[4].style.color = "blue";
for (let fruit of lists) {
  fruit.style.fontStyle = "italic";
}

// assignment4
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

const basketHeading = document.querySelector("h2");
basketHeading.style.marginLeft = "30px";
basketHeading.style.color = "brown";

const fruitItems = document.querySelectorAll(".fruit");
for (let fruit of fruitItems) {
  fruit.style.backgroundColor = "white";
  fruit.style.padding = "10px";
  fruit.style.margin = "10px";
  fruit.style.borderRadius = "5px";
}
const OddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for (let fruit of OddFruitItems) {
  fruit.style.backgroundColor = "lightgray";
}
const EvenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let fruit of EvenFruitItems) {
  fruit.style.backgroundColor = "brown";
  fruit.style.color = "white";
}
