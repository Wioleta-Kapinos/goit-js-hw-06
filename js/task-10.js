const boxesElements = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let amount = document.querySelector("input");
const initialSize = 30;
let currentSize = initialSize;
let newBox;
function createBoxes() {
  let value = amount.value != "" ? amount.value : 1;
  for ( let i = 1; i <= value; i++) {
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
  boxesElements.innerHTML = "";
  currentSize = initialSize;
}
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", handleClickDestroy);