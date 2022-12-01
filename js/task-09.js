const buttonChange = document.querySelector(".change-color");
const newColor = document.querySelector(".color");
const handleClick = () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  document.body.style.backgroundColor = getRandomHexColor();
  newColor.innerHTML = getRandomHexColor();
}
buttonChange.addEventListener("click", handleClick);