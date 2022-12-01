let valOfInput = document.querySelector("#validation-input");
let symbols = valOfInput.getAttribute("data-length");
let valInput = () => {
    valOfInput.classList.add("valid");
    valOfInput.classList.remove("invalid");
};
let invalInput = () => {
    valOfInput.classList.add("invalid");
    valOfInput.classList.remove("valid");
};
valOfInput.addEventListener("blur", () => {
    if(symbols == valOfInput.value.length) {
        valInput();
    } else {
        invalInput();
    }
});