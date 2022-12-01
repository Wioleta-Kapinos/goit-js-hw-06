let slider = document.querySelector("#font-size-control");
let textSpan = document.querySelector("#text");
slider.addEventListener("input", () => {
textSpan.style.fontSize = slider.value + "px";
});