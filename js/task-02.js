const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for( let i = 0; i < ingredients.length; i++) {
  let elemOfIngredients = document.createElement("li");
  elemOfIngredients.textContent = ingredients[i];
  elemOfIngredients.classList.add("item");
  console.log(elemOfIngredients);
}