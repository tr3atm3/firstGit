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
