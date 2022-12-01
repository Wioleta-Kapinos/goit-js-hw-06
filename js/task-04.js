const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
let counterSpan = document.querySelector("#value");
let counterValue = parseInt(counterSpan.innerText);
const handleClickDec = () => {
    counterValue -= 1;
    console.log(counterValue);
    counterSpan.innerHTML = counterValue;
}
const handleClickInc = () => {
    counterValue += 1;
    console.log(counterValue);
    counterSpan.innerHTML = counterValue;
}
buttonDec.addEventListener("click", handleClickDec);
buttonInc.addEventListener("click", handleClickInc);