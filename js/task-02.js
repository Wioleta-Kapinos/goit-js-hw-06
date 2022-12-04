const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector("ul");
console.log(listIngredients);
ingredients.forEach(function(ingredient, index) {
  ingredient = document.createElement("li");
  ingredient.textContent = ingredients[index];
  ingredient.classList.add("item");
  listIngredients.appendChild(ingredient);
  console.log(ingredient);
});