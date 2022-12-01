const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (Event) => {
    if(textInput.value === "") {
        textOutput.textContent = "Anonymous";
    } else {
     textOutput.textContent = Event.currentTarget.value;
    };
});