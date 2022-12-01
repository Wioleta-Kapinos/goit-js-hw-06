const boxesElements = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let amount = document.querySelector("input");
amount.addEventListener("input", (event) => {
  amount = parseInt(event.currentTarget.value);
  console.log(amount);
});
function createBoxes() {
  for ( let i = 1; i <= amount; i++) {
  let newBox = document.createElement("div");
  let sizeBox = 20 + i * 10;
  newBox.style.width = `${sizeBox}px`;
  newBox.style.height = `${sizeBox}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  boxesElements.append(newBox);
  console.log(newBox);
  }
}
const handleClickDestroy = () => {
  boxesElements.remove();
  console.log(boxesElements);
}
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", handleClickDestroy);