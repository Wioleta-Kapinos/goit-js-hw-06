const boxesElements = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let amount = document.querySelector("input");
let value = amount.value != "" ? amount.value : 1;
const initialSize = 30;
let currentSize = initialSize;
let newBox;
function createBoxes() {
  for ( let i = 1; i <= amount.value; i++) {
  newBox = document.createElement("div");
  newBox.style.width = `${currentSize}px`;
  newBox.style.height = `${currentSize}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  currentSize += 10;
  boxesElements.append(newBox);
  console.log(newBox);
  }
}
const handleClickDestroy = () => {
  newBox.remove();
  currentSize = initialSize;
}
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", handleClickDestroy);