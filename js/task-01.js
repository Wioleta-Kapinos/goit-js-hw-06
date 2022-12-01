const numOfLiItem = document.querySelectorAll("#categories > li.item");
console.log("Number of categories: ",numOfLiItem.length);

numOfLiItem.forEach((element) => {
    console.log("Category: ", element.querySelector("h2").textContent);
    console.log("Elements: ", element.querySelectorAll("li").length);
});