const container = document.getElementById("fruits");
const addButton = document.getElementById("button");
const input = document.getElementById("input");

Array.prototype.myPush = function (...a) {
  this.push(a[0]);
  init();
};

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const init = () => {
  container.innerHTML = "";
  fruits.sort().forEach((fruit, index) => {
    let item = document.createElement("li");
    item.innerHTML = fruit;
    container.appendChild(item);
  });
};

addButton.addEventListener("click", () => {
  const newFruit = input.value.trim();
  if (newFruit) {
    fruits.myPush(newFruit);
    input.value = "";
  }
  input.focus();
});

init();
